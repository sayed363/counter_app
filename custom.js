const display = document.querySelector('.counter-preview');

const increse = document.querySelector('#up');
const decrese = document.querySelector('#down');
const re_set = document.querySelector('#reset');

increse.addEventListener('click', increased);
decrese.addEventListener('click', decresed);
re_set.addEventListener('click', reset);

let value = 0;
function increased(){
    value  += 1;
    display.textContent = value;
}



function decresed(){
    value -= 1;
    display.textContent = value;
}



function reset(){
    value = 0;
    display.textContent = value;
}

