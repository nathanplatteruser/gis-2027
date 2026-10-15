// DAMA 2026 four-gateways checks. Run: node tests/gateways.mjs (needs the playwright package)
import { chromium, webkit, firefox } from 'playwright';
const ROOT=process.env.FR_ROOT||new URL('../flight-recorder',import.meta.url).pathname;
const SHOTS=process.env.SHOTS||null;
const base='file://'+ROOT+'/index.html';
let fails=0;const ok=(n,c)=>{console.log((c?'PASS ':'FAIL ')+n);if(!c)fails++};
for(const [bn,bt] of [['chromium',chromium],['webkit',webkit],['firefox',firefox]]){
 const b=await bt.launch();const p=await b.newPage({viewport:{width:1440,height:900}});const errs=[];p.on('pageerror',e=>errs.push(String(e)));
 // default GIS view: no overlay
 await p.goto(base+'#step1');ok(bn+' default has no overlay',(await p.locator('#gwbanner').count())===0&&await p.locator('#gwbtn').isVisible());
 // toggle on
 await p.click('#gwbtn');ok(bn+' toggle shows G2 on step 1',(await p.locator('#gwbanner').getAttribute('data-gw'))==='G2'&&await p.locator('#ledger >> text=FOUR GATEWAYS VIEW ON').isVisible());
 if(SHOTS&&bn==='chromium')await p.screenshot({path:SHOTS+'/gw-step1.png',fullPage:true});
 await p.click('#next');ok(bn+' step 2 tags G1 and G3',(await p.locator('#gwbanner').getAttribute('data-gw'))==='G1 G3');
 const vals=async()=>p.$$eval('#g1panel .pv',e=>e.map(x=>x.textContent).join('|'));
 let v=await vals();ok(bn+' redacted by default',v.includes('[SSN_REDACTED]')&&!v.includes('000-12-3456')&&!v.includes('example.com'));
 if(SHOTS&&bn==='chromium')await p.locator('#g1panel').screenshot({path:SHOTS+'/gw-redacted.png'});
 await p.click('#redact-toggle');v=await vals();ok(bn+' raw toggle shows synthetic values',v.includes('000-12-3456')&&(await p.locator('#redact-state').innerText()).includes('LOCAL ONLY')&&await p.locator('#ledger >> text=REDACTION APPLIED').isVisible());
 if(SHOTS&&bn==='chromium')await p.locator('#g1panel').screenshot({path:SHOTS+'/gw-raw.png'});
 await p.click('#redact-toggle');ok(bn+' toggles back',(await vals()).includes('[EMAIL_REDACTED]'));
 await p.click('#next');ok(bn+' fail-closed open, no number written',(await p.locator('#failclosed').getAttribute('data-fc'))==='open'&&await p.locator('#ledger >> text=HANDED BACK: UNRECONCILABLE_RECORD').isVisible()&&(await p.locator('[data-res=UNSUPPORTED]').count())===3);
 if(SHOTS&&bn==='chromium')await p.locator('#failclosed').screenshot({path:SHOTS+'/gw-failclosed.png'});
 await p.click('#fc-cedent');ok(bn+' human answer logged',(await p.locator('#failclosed').getAttribute('data-fc'))==='answered'&&(await p.locator('#ledger >> text=HUMAN ANSWERED: RE-CLM-0931').count())===1);
 for(let i=0;i<5;i++)await p.keyboard.press('ArrowRight');
 ok(bn+' closer tagged G4, pack lists gateways',(await p.locator('#gwbanner').getAttribute('data-gw'))==='G4'&&await p.locator('#pack >> text=Four gateways in this run').isVisible());
 // query-string entry point
 await p.goto(base+'?gateways=1#step5');ok(bn+' ?gateways=1 opens with overlay',(await p.locator('#gwbanner').getAttribute('data-gw'))==='G2 G4');
 if(SHOTS&&bn==='chromium')await p.screenshot({path:SHOTS+'/gw-step5.png',fullPage:true});
 ok(bn+' no page errors',errs.length===0);if(errs.length)console.log(errs);
 await b.close()}
console.log(fails?`${fails} FAILED`:'ALL GATEWAY CHECKS PASS');process.exit(fails?1:0);
