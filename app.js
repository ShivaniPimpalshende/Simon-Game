gameseq=[];
userseq=[];
levels=[];
level=0;
start=false;
btns=["red", "yellow", "green", "purple"];
let h4=document.querySelector("h4");
let body=document.querySelector("body");


body.addEventListener("keypress",function(){
    if(start==false){
      levelUp();
      start=true;
      a
  
    }
   
});



function levelUp(){
  userseq=[];
  level++;
  
 h4.innerText=`level ${level}`;
 let rdmind=Math.floor(Math.random()*3);
   let rndomcolor=btns[rdmind];
   let rdmbtn=document.querySelector(`.${rndomcolor}`);
   flash(rdmbtn);
   gameseq.push(rndomcolor);
   console.log(gameseq);
}



function flash(btn){
 btn.classList.add("flash");
 setTimeout(function(){
  btn.classList.remove("flash")
 },450);
}

let allbtns=document.querySelectorAll(".bttn");
for(btn of allbtns){
  btn.addEventListener("click",btnPress);
}

function btnPress(){
   let btn=this;
   flash(btn);
    let usercolor= btn.getAttribute("id");
     userseq.push(usercolor);
     checkAns(userseq.length-1);
      
}

function checkAns(idx){
  if (userseq[idx]===gameseq[idx]){
     if (userseq.length==gameseq.length){
      setTimeout(levelUp,1000)
    }
  }
  else{
    h4.innerHTML=`Game Over! Your Score is <b>${level}</b><br> press any key to start`;
    lvls=level;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
    
  }
}

function reset(){
  start=false;
  gameseq=[];
  userseq=[];
  level=0;
  
   
  
}



// function highscore(){
//   levels.push(lvls);
//   for(i=1;i<=levels.length;i++){
//        idx=1;
//        if(i>idx){
//          i=idx;
//        }
//   }
//   console.log(i);
// }