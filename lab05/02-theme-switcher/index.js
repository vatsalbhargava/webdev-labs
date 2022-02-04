/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const default_mode = () => {
   document.querySelector("header").style.backgroundColor = "lightgrey";
   document.querySelector(".content").style.backgroundColor = "white";
};

const desert_mode = () => {
   document.querySelector("header").style.backgroundColor = "brown";
   document.querySelector(".content").style.backgroundColor = "orange";
};

const ocean_mode = () => {
   document.querySelector("header").style.backgroundColor = "blue";
   document.querySelector(".content").style.backgroundColor = "lightblue";

};

const contrast_mode = () => {
   document.querySelector("header").style.backgroundColor = "black";
   document.querySelector(".content").style.backgroundColor = "white";

};

document.querySelector("#default").addEventListener('click', default_mode);
document.querySelector("#desert").addEventListener('click', desert_mode);
document.querySelector("#ocean").addEventListener('click', ocean_mode);
document.querySelector("#high-contrast").addEventListener('click', contrast_mode);