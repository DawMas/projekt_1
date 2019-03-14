function toggleMenu(visible) {
    document.querySelector('.menu').classList.toggle('show',visible)
}

document.querySelector('.fa-bars').addEventListener('click',function(e) {
    e.preventDefault();
    toggleMenu()
    
});