function makeHeart() {

let h = document.createElement("div");

h.className = "heart";

h.innerHTML = "❤️";

h.style.left =
Math.random() * 100 + "vw";

h.style.bottom = "-20px";

document
.getElementById("hearts")
.appendChild(h);

setTimeout(() => {

h.remove();

}, 8000);

}

setInterval(makeHeart, 400);

function confetti() {

for (let i = 0; i < 120; i++) {

let c =
document.createElement("div");

let icons = [
"✨",
"💖",
"🌸",
"⭐",
"💝"
];

c.innerHTML =
icons[
Math.floor(
Math.random()*icons.length
)
];

c.style.position = "fixed";

c.style.left =
Math.random()*100 + "vw";

c.style.top =
Math.random()*100 + "vh";

c.style.fontSize =
(20 + Math.random()*20) + "px";

c.style.zIndex = "9999";

document.body.appendChild(c);

setTimeout(() => {

c.remove();

},3000);

}

alert("For Griyanshi ❤️");

}
