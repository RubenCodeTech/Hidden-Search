let btn = document.querySelector('.btn');
let input = document.querySelector(".input")
btn.addEventListener('click', btnSearchHidden);
function btnSearchHidden(){
    input.classList.toggle("inputHidden")
}