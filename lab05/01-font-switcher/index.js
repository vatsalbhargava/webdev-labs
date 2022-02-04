const makeBigger = () => {
   alert('make bigger!');
   document.querySelector("h1").style.fontSize = "80px"; 
   document.querySelector(".content").style.fontSize = "80px";
};

const makeSmaller = () => {
   alert('make smaller!');
   document.querySelector("h1").style.fontSize = "10px"; 
   document.querySelector(".content").style.fontSize = "10px";
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

