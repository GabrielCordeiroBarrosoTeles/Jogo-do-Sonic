const sonic = document.querySelector(".sonic");
const eggman = document.querySelector(".eggman");
const fundo = document.querySelector(".fundo");

const jump = () => {
  sonic.classList.add("jump");
  sonic.src = "./img/Sonic-Jump.gif";

  setTimeout(() => {
    sonic.classList.remove("jump");
    sonic.src = "./img/Sonic.gif";
  }, 900);
};

const loop = setInterval(() => {
  const eggmanPosition = eggman.offsetLeft;
  const sonicPosition = +window
    .getComputedStyle(sonic)
    .bottom.replace("px", "");

  if (eggmanPosition < 110 && eggmanPosition > 0 && sonicPosition < 220) {
    eggman.style.animation = "none";
    eggman.style.left = `${eggmanPosition}px`;

    sonic.style.animation = "none";
    sonic.src = "./img/Sonic-Loss.gif";
    sonic.style.width = "240px";

    fundo.src = "./img/GameoverSMB-1.png";
  }
}, 10);

document.addEventListener("click", jump);
