let navbar = document.querySelector('.navbar');
let close_cart = document.querySelector('#close-cart');

let search_form= document.querySelector('.search-form');
let search_icon = document.querySelector('#search-icon');

function opennavbar(){
    navbar.style.right = '0';
}
function closecart(){
    navbar.style.right = '-100%';
}
function opensearch(){
    search_form.style.transform = 'scaleY(1)';
}
function closesearch(){
    search_form.style.transform = 'scaleY(0)';
}








