const screens=document.querySelectorAll(".screen");

function show(id){
screens.forEach(s=>s.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

beginBtn.onclick=()=>show("mission");
continueBtn.onclick=()=>show("profile");
nextBtn.onclick=()=>show("story");
revealBtn.onclick=()=>show("reveal");
yesBtn.onclick=()=>show("accepted");

function updateCountdown(){

const target=new Date("July 30, 2026");

const now=new Date();

const diff=target-now;

const days=Math.floor(diff/(1000*60*60*24));

document.getElementById("countdown").innerHTML=
`${days} days until mission day`;
}

updateCountdown();
setInterval(updateCountdown,1000);

let clicks=0;

document.addEventListener("click",e=>{

if(e.target.classList.contains("bigTitle")){

clicks++;

if(clicks===3){

alert(
"CLASSIFIED FILE\n\nTruth be told...\nSprinkles was looking for an excuse to spend the day with Sparkles anyway."
);

}
}
});
