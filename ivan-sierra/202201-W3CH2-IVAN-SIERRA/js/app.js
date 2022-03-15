import { Header } from "../components/header.js";
import { Details } from "../components/details.js";
import { List } from "../components/list.js";



export const main = function(){
   
    new Header('').render('#header');
    new Details('').render('#heros');
    new List('').render('#')
   
    
}
document.addEventListener('DOMContentLoaded',main);