import { webkit, chromium, firefox } from 'playwright';
import fs from 'fs'; import http from 'http'; import path from 'path';
const ROOT='/workspace/gis-2027/flight-recorder', SHOTS=ROOT+'/screenshots';
const modes=(process.env.MODES||'file,server').split(',');
const SAFARI='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15';
const EDGE='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0';
const cfgs=[['mac-safari-1440x900',webkit,SAFARI,1440,900],['mac-safari-1280x800',webkit,SAFARI,1280,800],['win-edge-1920x1080',chromium,EDGE,1920,1080],['win-edge-1366x768',chromium,EDGE,1366,768],['firefox-1440x900',firefox,null,1440,900]];
const srv=http.createServer((q,r)=>{let f=path.join(ROOT,decodeURIComponent(q.url.split('?')[0]));if(f.endsWith('/'))f+='index.html';fs.readFile(f,(e,d)=>{if(e){r.writeHead(404);r.end();return}r.writeHead(200,{'content-type':f.endsWith('.html')?'text/html':'application/octet-stream'});r.end(d)})}).listen(8765);
const URLS={file:'file://'+ROOT+'/index.html',server:'http://localhost:8765/',pages:'https://nathanplatteruser.github.io/gis-2027/flight-recorder/'};
const results=[];
for(const [name,bt,ua,w,h] of cfgs)for(const mode of modes){
 const r={platform:name,mode,checks:{},errors:[]};
 const b=await bt.launch();const ctx=await b.newContext({viewport:{width:w,height:h},userAgent:ua||undefined,acceptDownloads:true});const p=await ctx.newPage();
 p.on('pageerror',e=>r.errors.push(String(e)));
 try{
  await p.goto(URLS[mode]);const dir=`${SHOTS}/${name}/${mode}`;fs.mkdirSync(dir,{recursive:true});
  const shot=async n=>p.screenshot({path:`${dir}/step${n}.png`,fullPage:true});
  r.checks.step1=await p.locator('text=Never allowed').isVisible();await shot(1);
  await p.click('#next');r.checks.step2=(await p.locator('.src').count())>=10&&(await p.locator('.synth').count())>=3;
  await p.locator('.src').first().click();r.checks.step2_source=await p.locator('.hl').first().isVisible();await shot(2);
  await p.click('#next');const res=await p.$$eval('[data-res]',e=>e.map(x=>x.dataset.res));
  r.checks.step3=res.filter(x=>x==='UNSUPPORTED').length===3&&res.filter(x=>x==='SUPERSEDED').length===2;await shot(3);
  await p.click('#next');r.checks.step4_holds=(await p.locator('[data-hold]').count())===2;
  for(let i=0;i<2;i++)await p.locator('[data-hold] button').first().click();
  r.checks.step4_resolved=(await p.locator('[data-hold] button').count())===0;await shot(4);
  await p.click('#next');r.checks.step5=await p.locator('.alert:has-text("BLOCKED")').isVisible()&&await p.locator('#ledger >> text=ESCALATED').isVisible();
  await p.click('text=Supervisor: reject');r.checks.step5_human=await p.locator('text=Human decision recorded').isVisible();await shot(5);
  await p.click('#next');r.checks.step6=(await p.locator('[data-scen]').count())===3;
  for(let i=0;i<3;i++)await p.locator('[data-scen] button.go:not(.alt)').first().click();
  r.checks.step6_human=(await p.locator('[data-scen] button').count())===0&&await p.locator('#ledger >> text=SUSPECTED: IMPERSONATION_SIGNALS').isVisible();await shot(6);
  await p.click('#next');r.checks.closer=await p.getByRole('cell',{name:'Colorado 3 CCR 702-10 Sec. 5.A.9',exact:true}).isVisible();
  const [dl]=await Promise.all([p.waitForEvent('download',{timeout:8000}),p.click('#dl')]);const fp=`${dir}/evidence-pack.html`;await dl.saveAs(fp);
  const txt=fs.readFileSync(fp,'utf8');r.checks.download=txt.includes('ESCALATED')&&txt.includes('AIS Program Guidelines 3.1')&&txt.includes('accessed 2026-10-12')&&txt.includes('TREATY_TERRITORY_GAP');await shot(7);
 }catch(e){r.errors.push(String(e).slice(0,300))}
 r.pass=Object.values(r.checks).every(Boolean)&&Object.keys(r.checks).length===12&&!r.errors.length;results.push(r);console.log(name,mode,r.pass?'PASS':'FAIL',JSON.stringify(r.checks),r.errors.join(' | '));
 await b.close()}
fs.writeFileSync(`results-${modes.join('-')}.json`,JSON.stringify(results,null,1));srv.close();
