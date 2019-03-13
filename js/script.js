function toggleMenu(visible) {
    document.querySelector('.menu').classList.toggle('show',visible)
}

document.querySelector('.fa-hamburger').addEventListener('click',function(e) {
    e.preventDefault();
    toggleMenu()
    
});