let btn = document.querySelector('.btn');
let input = document.querySelector(".input")
console.log(input)
btn.addEventListener('click', btnSearchHidden);
function btnSearchHidden(){
    console.log('hola');
    input.classList.toggle("inputDisplayBlock")
}