let div1 = document.querySelector('#div1');
let div2 = document.querySelector('#div2');
let div3 = document.querySelector('#div3');
let div4 = document.querySelector('#div4');

let flexer = document.querySelector('.flex-case');

div1.onclick = () =>{
    flexer.style.transform = 'translateX(-0%)';
}
div2.onclick = () =>{
    flexer.style.transform = 'translateX(-25%)';
}
div3.onclick = () =>{
    flexer.style.transform = 'translateX(-50%)';
}
div4.onclick = () =>{
    flexer.style.transform = 'translateX(-75%)';
}