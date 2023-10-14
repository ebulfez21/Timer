const start = document.querySelector(".Start");
const Stop = document.querySelector(".Stop");
const reset = document.querySelector(".Reset");

const second = document.querySelector(".second");
let started;

start.onclick = () => {
  clearInterval(started);
  started = setInterval(() => {
    second.innerText++;
    second.style.color = "green";
  }, 100);
};

Stop.onclick = () => {
  clearInterval(started);
  second.style.color = "red";
};
reset.onclick = () => {
  second.innerText = "0";
  second.style.color = "black";
};

start.classList.add("button");
Stop.classList.add("button");
reset.classList.add("button");
