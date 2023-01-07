var menu = document.getElementById('menu-items');
var nav = document.getElementById('navBar')
var navX = document.getElementById('navX')

function toggleMenu() {
    if (menu.style.display === 'flex') {
        menu.style.display = 'none'
        navX.style.display = 'none'
        nav.style.display = 'flex'
    }
    
    else {
        menu.style.display = 'flex'
        navX.style.display = 'block'
        nav.style.display = 'none'
    }
}
