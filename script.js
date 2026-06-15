const qs=s=>document.querySelector(s);
function show(id){
document.querySelectorAll('.screen').forEach(x=>x.classList.remove('active'));
qs('#'+id).classList.add('active');
}
const text='Incoming Transmission From Earth-SPARKLES';
let i=0;
(function type(){
 if(i<text.length){qs('#typewriter').textContent+=text[i++];setTimeout(type,50);}
})();

qs('#beginBtn').onclick=()=>show('profile');
qs('#continueBtn').onclick=()=>show('story');
qs('#revealBtn').onclick=()=>show('reveal');

qs('#yesBtn').onclick=()=>{
 confetti({particleCount:250,spread:180});
 show('accepted');
};

function update(){
 const target=new Date('2026-07-30');
 const diff=target-new Date();
 const d=Math.max(0,Math.floor(diff/86400000));
 const el=qs('#countdown');
 if(el) el.textContent=d+' days until mission day';
}
setInterval(update,1000); update();

tsParticles.load('particles',{
 particles:{number:{value:80},move:{enable:true,speed:1},size:{value:2}}
});

