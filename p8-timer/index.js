const t1 = document.getElementById("t");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let h = 0;
let m = 0;
let s = 0;
let l = null;
start.addEventListener("click", () => {
  if (l !== null) return;
  l = setInterval(() => {
    console.log(h, ":", m, ":", s);
    t1.textContent = `${h}:${m}:${s}`;
    s++;
    if (s === 60) { m++; s = 0; }
    if (m === 60) { h++; s = 0; m = 0; }
  }, 1000);
});
stop.addEventListener("click", () => {
  clearInterval(l);
  l = null;
});
reset.addEventListener("click", () => {
  clearInterval(l);
  l = null;
  h = 0; m = 0; s = 0;
  t1.textContent = `${h}:${m}:${s}`;
});