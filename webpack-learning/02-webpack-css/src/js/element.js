import "../css/style.css";
import "../css/style.less"

const divEl = document.createElement("div");

divEl.className = "title";
divEl.innerHTML = "Hello World";

document.body.appendChild(divEl);