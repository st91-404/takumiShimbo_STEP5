//input
const changeButton = document.getElementById("changeButton");
const h2 = document.querySelector(".myColor");
const bgColors = ["lightblue","lightgreen","lightcoral"];
let currentColorIndex = 0;
//output
changeButton.addEventListener('click',()=>{
    currentColorIndex = (currentColorIndex + 1) % bgColors.length;
    h2.style.backgroundColor = bgColors[currentColorIndex];
}
);
