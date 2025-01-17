/*=====Opdracht 1=====*/

let interaction1 = document.querySelector("a:nth-of-type(12)");

interaction1.addEventListener("click", jumpHandler);
interaction1.addEventListener("animationend", jumpHandler);

function jumpHandler() {
  interaction1.classList.toggle("jump");
}

/*=====Opdracht 2=====*/

let interaction2 = document.querySelector("a:nth-of-type(1)");

interaction2.addEventListener("click", GrowHandlerClick);
interaction2.addEventListener("animationend", GrowHandlerClick);

function GrowHandlerClick() {
  interaction2.classList.toggle("grow");
}

/*=====Opdracht 3=====*/

let interaction3 = document.querySelector("a:nth-of-type(2)");

interaction3.addEventListener("click", ShrinkHandler);
interaction3.addEventListener("animationend", ShrinkHandler);

function ShrinkHandler() {
  interaction3.classList.toggle("shrink");
}

/*=====Opdracht 4=====*/

let interaction4 = document.querySelector("a:nth-of-type(3)");

interaction4.addEventListener("click", RotateHandler);
interaction4.addEventListener("animationend", RotateHandler);

function RotateHandler() {
  interaction4.classList.toggle("rotate");
}

/*=====Opdracht 5=====*/

let interaction5 = document.querySelector("a:nth-of-type(4)");

interaction5.addEventListener("dblclick", JiggleHandler);
interaction5.addEventListener("animationend", JiggleHandler);

function JiggleHandler() {
  interaction5.classList.toggle("jiggle");
}

/*=====Opdracht 6=====*/

let interaction6 = document.querySelector("a:nth-of-type(5)");

document.addEventListener("keydown", function (event) {
  if (event.key === "f") {
    FlyHandler();
  }
});
interaction6.addEventListener("animationend", FlyHandler);

function FlyHandler() {
  interaction6.classList.toggle("fly");
}

// /*=====Opdracht 7=====*/

let interaction7 = document.querySelector("a:nth-of-type(6)");

interaction7.addEventListener("mouseenter", GrowHandlerEnter);
interaction7.addEventListener("animationend", GrowHandlerEnter);

function GrowHandlerEnter() {
  interaction7.classList.toggle("grow");
}

// /*=====Opdracht 8=====*/

let interaction8 = document.querySelector("a:nth-of-type(7)");

interaction8.addEventListener("mouseleave", GrowHandlerLeave);
interaction8.addEventListener("animationend", GrowHandlerLeave);

function GrowHandlerLeave() {
  interaction8.classList.toggle("grow");
}

// /*=====Opdracht 9=====*/

let interaction9 = document.querySelector("a:nth-of-type(8)");

interaction9.addEventListener("contextmenu", GrowHandlerMenu);
interaction9.addEventListener("animationend", GrowHandlerMenu);

function GrowHandlerMenu() {
  interaction9.classList.toggle("grow");
}

// /*=====Opdracht 10=====*/

let interaction10 = document.querySelector("a:nth-of-type(9)");

interaction10.addEventListener("focus", GrowHandlerFocus);
interaction10.addEventListener("animationend", GrowHandlerFocus);

function GrowHandlerFocus() {
  interaction10.classList.toggle("grow");
}
