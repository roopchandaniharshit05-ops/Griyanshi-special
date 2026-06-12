// =========================
// PAGE NAVIGATION
// =========================

function nextPage(pageNumber){

let pages =
document.querySelectorAll(".page");

pages.forEach(page=>{
page.classList.remove("active");
});

document
.getElementById("page"+pageNumber)
.classList.add("active");

window.scrollTo(0,0);

}

// =========================
// FLOATING HEARTS
// =========================

function createHeart(){

let heart =
document.createElement("div");

heart.className = "heart";

let hearts = [
"❤️",
"💖",
"💕",
"💗",
"💘"
];

heart.innerHTML =
hearts[
Math.floor(
Math.random()*hearts.length
)
];

heart.style.left =
Math.random()*100 + "vw";

heart.style.bottom = "-50px";

heart.style.fontSize =
(20 + Math.random()*20)+"px";

document
.getElementById("hearts")
.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

}

setInterval(createHeart,400);

// =========================
// MOVING NO BUTTON
// =========================

function moveNoButton(){

let btn =
document.getElementById("noBtn");

let x =
Math.random()*250;

let y =
Math.random()*100;

btn.style.position = "absolute";

btn.style.left =
x + "px";

btn.style.top =
y + "px";

}

// Mobile support

document.addEventListener("touchstart",()=>{

let btn =
document.getElementById("noBtn");

if(btn){

btn.addEventListener("click",function(){

moveNoButton();

});

}

});

// =========================
// CONFETTI CELEBRATION
// =========================

function confetti(){

for(let i=0;i<200;i++){

let piece =
document.createElement("div");

let icons = [
"✨",
"💖",
"💕",
"🌸",
"💝",
"⭐",
"❤️"
];

piece.innerHTML =
icons[
Math.floor(
Math.random()*icons.length
)
];

piece.style.position = "fixed";

piece.style.left =
Math.random()*100 + "vw";

piece.style.top =
"-50px";

piece.style.fontSize =
(20 + Math.random()*25)+"px";

piece.style.zIndex = "99999";

piece.style.transition =
"4s linear";

document.body.appendChild(piece);

setTimeout(()=>{

piece.style.top =
"110vh";

piece.style.transform =
"rotate(720deg)";

},50);

setTimeout(()=>{

piece.remove();

},4500);

}

showFinalMessage();

}

// =========================
// FINAL MESSAGE
// =========================

function showFinalMessage(){

let box =
document.createElement("div");

box.innerHTML = `

<div style="
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
background:white;
color:#ff4d6d;
padding:30px;
border-radius:25px;
text-align:center;
z-index:100000;
box-shadow:0 0 30px rgba(0,0,0,.3);
max-width:350px;
">

<h2>❤️ For Griyanshi ❤️</h2>

<p>
No matter how many pages,
they'll never be enough
to describe how special you are.
</p>

<h3>
— Gawar ❤️
</h3>

<button
onclick="this.parentElement.parentElement.remove()"
style="
padding:10px 20px;
border:none;
border-radius:20px;
background:#ff4d6d;
color:white;
cursor:pointer;
">
Close
</button>

</div>

`;

document.body.appendChild(box);

}

// =========================
// LOADER
// =========================

window.onload = function(){

setTimeout(()=>{

let loader =
document.getElementById("loader");

if(loader){

loader.style.display = "none";

}

},3000);

};

// =========================
// KEYBOARD SUPPORT
// =========================

document.addEventListener(
"keydown",
function(e){

let current =
document.querySelector(".page.active");

if(!current) return;

let currentId =
parseInt(
current.id.replace("page","")
);

if(
e.key === "ArrowRight"
&& currentId < 9
){

nextPage(currentId+1);

}

}
);
