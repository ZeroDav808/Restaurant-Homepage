import "./styles.css";
import {str} from "./misc.js";
import { locationInfo } from "./location.js";
import { menuInfo } from "./menu.js";
import { homeInfo } from "./home.js";

console.log(str);

const outerContainer = document.querySelector('#content');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        while(outerContainer.firstChild){
            outerContainer.removeChild(outerContainer.firstChild);
        }
        if(e.target.classList.contains('location')){
            locationInfo();
        } else if(e.target.classList.contains('home')){
            homeInfo();
        } else if(e.target.classList.contains('menu')){
            menuInfo();
        }
    })
})

