import {multi} from './util_es6'
const sum = require("./util")
let m = sum(2,3)
let m1 = multi(4,6)
import './css/main.css';
// import gico from "images/google.ico";
import bai from "./images/test.jpg"
window.onload=function(){
    let ico = new Image();
    ico.src=bai;
    document.body.appendChild(ico)
}
// alert("Hello world....+"m+"..."+m1);
// let ico = new Image()
// ico.src=gico
// document.body.appendChild(ico);
