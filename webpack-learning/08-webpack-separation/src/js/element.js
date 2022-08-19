import "../css/style.css";
import "../css/title.less"
import "../css/image.css"
import "../font/iconfont.css"

import zznhImage from "../img/zznh.png";

const divEl = document.createElement("div");

divEl.className = "title";
divEl.innerHTML = "Hello World";

// 1. class设置背景
const bgDivEl = document.createElement("div");
bgDivEl.className = "image-bg";

// 2. 属性设置，作为模块导入图片
const imgEl = document.createElement("img");
imgEl.src = zznhImage;

// 字体
const iEl = document.createElement('i');
iEl.className = 'iconfont icon-icon';

document.body.appendChild(divEl);
document.body.appendChild(bgDivEl);
document.body.appendChild(imgEl);
document.body.appendChild(iEl);
console.log("你好，世界");