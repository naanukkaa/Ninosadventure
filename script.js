'use strict';
const $=s=>document.querySelector(s),wait=ms=>new Promise(r=>setTimeout(r,ms));

/* ---------- პიქსელ-არტი: ტექსტური ბადე -> SVG ---------- */
const PAL={h:'#4b2a24',H:'#6e4034',s:'#f7caa9',c:'#f79fb0',e:'#3b1e1a',w:'#fff',t:'#fff0c9',g:'#ff5fa2',p:'#ffa8cb',P:'#e8679b',
 m:'#c63f62',o:'#7a2a52',l:'#ffc4de',b:'#ff8fc0',B:'#e0508f',y:'#ffd34d',Y:'#e0a82a',k:'#4a1d3a',G:'#fff3a0',f:'#ffcc33',
 r:'#ff4f93',x:'#e8c9d8',d:'#5a3a55'};
const svg=(rows,mir)=>{let r='',W=0;rows.forEach((row,y)=>{if(mir)row+=[...row].reverse().join('');W=row.length;
 [...row].forEach((ch,x)=>{if(PAL[ch])r+=`<rect x="${x}" y="${y}" width="1.03" height="1.03" fill="${PAL[ch]}"/>`})});
 return `<svg viewBox="0 0 ${W} ${rows.length}" shape-rendering="crispEdges">${r}</svg>`};

const HEART=[".rr.rr.","rrrrrrr","rrrrrrr",".rrrrr.","..rrr..","...r..."];
const ICON={
 heart:svg(HEART),heartOff:svg(HEART.map(r=>r.replace(/r/g,'x'))),
 star:svg(["...y...","..yyy..","yyyyyyy",".yyyyy.",".yy.yy.","yy...yy"]),
 lock:svg(["..ddd..",".d...d.",".d...d.","ddddddd","ddyyydd","dddyddd","ddddddd"]),
 bow:svg(["rr..","rrr.","rrrB","rrr.","rr.."],1),
 cake:svg(["......f","......w","......w","wwwwwww","pppwpwp","ppppppp","PPPPPPP","wwwwwww"],1)
};
/* ნინოს სპრაიტი (ნახევარი სახე, სარკისებურად ორმაგდება) */
const TOP=["....t..g","...ttttt","..hhhhhh",".hhhHhhh",".hhsssss","hhhsssss"];
const BOT=["hhhsssss","hhhppppp","hhppppPP","hhpppppp","..pppppp"];
const FACE={
 happy:["hhseesss","hhssssss","hhccssss","hhsssmss","hhssssmm"],
 excited:["hhsewsss","hhseesss","hhccssss","hhsssmmm","hhssssmm"],
 surprised:["hhsewsss","hhseesss","hhccssss","hhssssmm","hhssssmm"],
 thinking:["hhsewsss","hhseesss","hhccssss","hhssssss","hhsssmmm"],
 celebrate:["hhseesss","hhssssss","hhccssss","hhsssmmm","hhssssmm"]};
const EX={},spr=e=>EX[e]??=svg([...TOP,...FACE[e],...BOT],1);
const setExpr=(el,e)=>{el.dataset.expr=e;el.innerHTML=spr(e)};
/* საგანძურის სკივრი */
const REST=["oyyyyyyy","obbbbbyY","obbbbbyk","obbbbbyY","oBBBBBBB","oooooooo"];
const CHEST_C=svg(["...ooooo","..olllll",".ollllyl",".olbbbyb",".obbbbyb","oooooooo",...REST],1);
const CHEST_O=svg(["..oooooo",".olllllb","........",".GGGGGGG","oGGGGGGG","oooooooo",...REST],1);

/* ---------- მონაცემები ---------- */
const M=[
{t:"ფუმფულა სიურპრიზი",deco:"🎀✨🎀",
 rhyme:"ვარდები წითელია, იები ლურჯი,\nფანჯარასთან ვდგავარ, ვარ გრძელი და ფრიალა.\nმზეს ვუფარავ სახეს, ქარს ვუცეკვებ ხელებს,\nჩემს უკან შეიხედე — იქ სიურპრიზი გელის!\n\n(ოღონდ ნუ მომქაჩავ, თორემ ჩამოვვარდები! 😅)"},
{t:"მელოდიური სიურპრიზი",deco:"🎵🎹🎶",
 rhyme:"ვარდები წითელია, იები ლურჯი,\nშავ-თეთრი კბილები მაქვს, მაგრამ არ ვკბენ, გაიგე?\nდო-რე-მი-ფა-სოლს ვმღერი, როცა მომეფერები —\nკლავიშებს რაც აფარია, იქ გიცდის სიურპრიზი!\n\n(თითები ფრთხილად, მე ტკბილხმოვანი ვარ! 🎶)"},
{t:"ლამაზი სიურპრიზი",deco:"💄💗🎀",
 rhyme:"ვარდები წითელია, იები ლურჯი,\nტუჩებს ბზინვა უყვარს, სახეს — სისუფთავე.\nლოყაზე რამე თუ ამოხტა, ნუ ინერვიულებ ჯერ —\nდესაოში ჩაიხედე, იქ გელის სიმშვენიერე!\n\n(ბზინვა იქნება, გპირდები! ✨)"},
{t:"მთავარი სიურპრიზი"}];
const SAY=["აბა, პირველი კონვერტი გახსენი! 💌","მაგარია! გაგრძელდეს! 🎵","ერთი კიდევ და ბოსთან ვართ! 😎","ბოლო კონვერტი გელოდება... 👑","შენ ყველა მისია შეასრულე! 🎉"];
const INTRO="ეს ნინოა! 🎀 დაბადების დღის გოგო!\n\nმოდი გამოვიცნო... შენ ნინო ხარ, არა?! 👀\n\nჰოდა, დღეს განსაკუთრებული მისია გაქვს!\n\nმე დაგეხმარები შენი საჩუქრების პოვნაში. მიჰყევი მინიშნებებს, შეასრულე მისიები და ბოლოს ყველაზე დიდი სიურპრიზიც გელოდება!\n\nმზად ხარ, დაბადების დღის გოგო? 💗";

/* ---------- შენახვა (localStorage) ---------- */
let S={started:0,done:0,hint:{}};
try{Object.assign(S,JSON.parse(localStorage.getItem('ninoGame')||'{}'))}catch(e){}
const save=()=>{try{localStorage.setItem('ninoGame',JSON.stringify(S))}catch(e){}};

/* ---------- ტექსტის აკრეფა ---------- */
let tw=0,skip=false;
addEventListener('pointerdown',()=>skip=true);
function type(el,txt,sp=34){const id=++tw;skip=false;let i=0;
 el.textContent=txt;el.style.minHeight=el.offsetHeight+'px';el.textContent='';
 return new Promise(res=>{const step=()=>{if(id!==tw)return res();
  if(skip)i=txt.length;else i++;
  el.textContent=txt.slice(0,i);
  i<txt.length?setTimeout(step,/[.!?…]/.test(txt[i-1])?sp*7:sp):res()};step()})}

/* ---------- ეკრანები ---------- */
let timers=[];
function go(id){timers.forEach(clearInterval);timers=[];
 document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('on',s.id===id));
 const sc=$('#'+id);sc.scrollTop=0}
document.addEventListener('click',e=>{const b=e.target.closest('[data-go]');if(b){if(b.dataset.go==='map')renderMap();go(b.dataset.go)}});
function toast(t){const el=$('#toast');el.textContent=t;el.classList.add('on');clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove('on'),2200)}

/* ფონის მცურავი გულები და ვარსკვლავები */
for(let i=0;i<12;i++){const s=document.createElement('span');s.className='fl';s.innerHTML=i%2?ICON.heart:ICON.star;
 s.style.cssText=`left:${Math.random()*92}%;width:${14+Math.random()*14|0}px;animation-duration:${9+Math.random()*9}s;animation-delay:-${Math.random()*14}s`;
 $('#decor').append(s)}

/* ---------- კონფეტი და ფეიერვერკი (canvas) ---------- */
const cv=$('#fx'),cx=cv.getContext('2d');let P=[],raf=0;
const PINK=['#ff5fa2','#ffa8cb','#fff','#ff8fc0','#e8679b'],GOLD=['#ffd34d','#ffe99a','#e0a82a','#fff3a0'];
function fit(){const d=Math.min(devicePixelRatio||1,2);cv.width=innerWidth*d;cv.height=innerHeight*d;cx.setTransform(d,0,0,d,0,0)}
addEventListener('resize',fit);fit();
function burst(x,y,n,cols,sp=9,g=.25,life=90){if(P.length>450)n=n/3|0;
 for(let i=0;i<n;i++){const a=Math.random()*6.28,v=Math.random()*sp+2;
  P.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-sp*.4,s:4+Math.random()*5|0,c:cols[Math.random()*cols.length|0],l:life+Math.random()*40,g})}
 if(!raf)raf=requestAnimationFrame(tick)}
function tick(){raf=0;cx.clearRect(0,0,innerWidth,innerHeight);P=P.filter(p=>p.l>0&&p.y<innerHeight+20);
 P.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=p.g;p.vx*=.985;p.l--;cx.fillStyle=p.c;cx.fillRect(p.x|0,p.y|0,p.s,p.s)});
 if(P.length)raf=requestAnimationFrame(tick)}
const rain=()=>{for(let i=0;i<6;i++){burst(Math.random()*innerWidth,-10,1,[...PINK,...GOLD],1,.03,260);const p=P[P.length-1];p.vx=Math.random()*2-1;p.vy=2+Math.random()*2}};
const firework=()=>burst(innerWidth*(.15+Math.random()*.7),innerHeight*(.1+Math.random()*.35),36,[[...PINK],[...GOLD]][Math.random()*2|0],6,.12,55);
const party=()=>{burst(innerWidth/2,innerHeight*.6,90,[...PINK,...GOLD],12,.28,100)};

/* ---------- რუკა ---------- */
let unl=0;
function renderMap(){
 $('#prog').innerHTML=[1,2,3,4].map(n=>n<=S.done?ICON.heart:ICON.heartOff).join('')+`<span>${S.done}/4 მისია შესრულებულია</span>`;
 setExpr($('#mapSpr'),S.done>=4?'celebrate':'happy');
 $('#mapSay').textContent=SAY[S.done];
 const box=$('#envs');box.innerHTML='';
 [1,2,3,4].forEach(n=>{const st=n<=S.done?'done':n===S.done+1?'open':'lock';
  const b=document.createElement('button');b.className=`ew ${st}`+(unl===n?' unl':'');
  b.innerHTML=(n===4?`<span class="crown">${ICON.star}</span>`:'')+
   `<span class="env"><span class="ec"><span class="b">${ICON.bow}</span>${st==='lock'?`<span class="i">${ICON.lock}</span>`:`<span class="num">${n}</span>`}</span></span>`+
   `<span class="tag">♥ მისია ${n} ♥</span>`;
  b.onclick=()=>{if(st==='lock'){b.classList.add('shk');setTimeout(()=>b.classList.remove('shk'),400);toast('🔒 ჯერ წინა მისია შეასრულე!');return}
   n===4?openM4():openMission(n)};
  box.append(b)});
 if(unl){const n=unl;unl=0;setTimeout(()=>burst(innerWidth/2,innerHeight/2,40,[...PINK,...GOLD],8,.2,70),300)}
}

/* ---------- მისია 1-3 ---------- */
let cur=0;
async function openMission(n){cur=n;const m=M[n-1],done=S.done>=n,seen=done||S.hint[n];
 $('#mTitle').textContent=`მისია ${n}: ${m.t}`;$('#mDeco').textContent=m.deco;
 $('#noteBow').innerHTML=ICON.bow;
 $('#hintBtn').hidden=true;$('#doneBtn').hidden=true;$('#doneBtn').disabled=false;
 $('#doneBtn').textContent=n===3?'ვიპოვე! ბოლო მისია!':'ვიპოვე! შემდეგი მისია!';
 setExpr($('#mSpr'),done?'celebrate':'thinking');
 $('#mSay').textContent=done?'ეს მისია უკვე შესრულებულია! 🎉':S.hint[n]?'წადი და მოძებნე! 🔍':'წაიკითხე და გამოიცანი! 🤔';
 go('mission');
 if(seen){$('#clue').textContent=m.rhyme;$('#doneBtn').hidden=done;return}
 await type($('#clue'),m.rhyme,32);
 if(cur===n&&!S.hint[n])$('#hintBtn').hidden=false}
$('#hintBtn').onclick=()=>{S.hint[cur]=1;save();$('#hintBtn').hidden=true;$('#doneBtn').hidden=false;
 setExpr($('#mSpr'),'excited');$('#mSay').textContent='წადი და მოძებნე! 🔍 მერე დაბრუნდი!';
 burst(innerWidth/2,innerHeight*.7,25,PINK,6,.2,50)};
$('#doneBtn').onclick=async()=>{const n=cur;$('#doneBtn').disabled=true;S.done=Math.max(S.done,n);save();
 setExpr($('#mSpr'),'celebrate');$('#mSay').textContent='მისია შესრულებულია! ყოჩაღ! 🎉';party();
 await wait(1700);unl=n+1;renderMap();go('map')};

/* ---------- მისია 4: ფინალური ბოსი ---------- */
function openM4(){setExpr($('#m4introSpr'),'excited');
 $('#m4go').textContent=S.done>=4?'ფინალის თავიდან ნახვა 🎁':'გახსენი ბოლო კონვერტი! 💌';go('m4')}
$('#m4go').onclick=finale;$('#replay').onclick=finale;
let running=false;
function spark(n){const r=$('#chest').getBoundingClientRect(),g=$('#game').getBoundingClientRect();
 for(let i=0;i<n;i++){const s=document.createElement('span');s.className='sp';s.innerHTML=Math.random()<.5?ICON.heart:ICON.star;
  s.style.cssText=`left:${r.left-g.left+r.width*Math.random()}px;top:${r.top-g.top+r.height*.4}px;--dx:${(Math.random()-.5)*220|0}px;--dy:${-70-Math.random()*220|0}px`;
  $('#stage').append(s);s.onanimationend=()=>s.remove()}}
async function finale(){if(running)return;running=true;
 const st=$('#stage'),ch=$('#chest'),txt=$('#m4txt'),btn=$('#m4btn');
 document.querySelectorAll('.sp').forEach(e=>e.remove());
 st.className='screen';ch.className='';ch.innerHTML=CHEST_C;$('#rays').className='';btn.hidden=true;txt.textContent='';txt.style.minHeight='';
 setExpr($('#m4spr'),'excited');go('stage');
 await wait(150);st.classList.add('on','dark');            // 1. მუქი, მაგიური ვარდისფერი
 await wait(2800);
 type(txt,'მოიცა... ეს რა არის?!',60);setExpr($('#m4spr'),'surprised'); // 2-3
 await wait(2400);
 ch.className='drop';await wait(1300);                      // 4. სკივრი ჩამოდის
 ch.className='shake';st.classList.add('on','dark');        // 5. ფრთხიალი
 const a=setInterval(()=>spark(2),160);timers.push(a);
 await wait(3200);
 ch.className='shake2';st.classList.add('on','dark','rumble');$('#rays').className='on';
 clearInterval(a);const b=setInterval(()=>spark(4),90);timers.push(b);
 await wait(3000);
 clearInterval(b);st.classList.remove('rumble');           // 7-8. გახსნა!
 ch.innerHTML=CHEST_O;ch.className='open';$('#flash').classList.remove('go');void $('#flash').offsetWidth;$('#flash').classList.add('go');
 setExpr($('#m4spr'),'celebrate');party();
 const r=ch.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height*.3,120,GOLD,14,.3,110);
 for(let i=0;i<5;i++)setTimeout(firework,i*350);
 timers.push(setInterval(rain,120),setInterval(firework,900));
 S.done=4;save();
 await wait(2200);
 await type(txt,'ნინოოოო!!! 💗\n\nშენ იპოვე მთავარი სიურპრიზი!\n\nმაგრამ მოიცა... მგონი რაღაც შენს გვერდით არის...\n\nაბა, აიხედეეე!!! 👀🎁',48);
 btn.hidden=false;running=false}
$('#m4btn').onclick=()=>{running=false;showEnd()};

/* ---------- დაბადების დღის ეკრანი ---------- */
function showEnd(){setExpr($('#endSpr'),'celebrate');$('#cake').innerHTML=ICON.cake;go('end');
 party();timers.push(setInterval(rain,150),setInterval(firework,700))}

/* ---------- დაწყება ---------- */
setExpr($('#introSpr'),'happy');
if(S.started){renderMap();go('map')}else{
 go('intro');setExpr($('#introSpr'),'excited');
 type($('#introText'),INTRO,38).then(()=>{setExpr($('#introSpr'),'happy');$('#startBtn').hidden=false})}
$('#startBtn').onclick=()=>{S.started=1;save();renderMap();go('map')};
