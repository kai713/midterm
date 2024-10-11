let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach((section) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = window.offsetHeight;
        let id = sec.get.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}
