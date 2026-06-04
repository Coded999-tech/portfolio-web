const navbar = document.querySelector('.navbar');
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-link');

const progress = document.querySelector('.progress-bar-wrapper');
const progressBarpercent = [97, 89, 85, 87, 80, 70, 50]

window.addEventListener('scroll', () => {
    mainfn();
});

const mainfn = () => {
    if(window.pageXOffset >= navbar.offsetTop){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
    sections.forEach((section, i) => {
        if(window.pageYOffset >= section.offsetTop - 10){
            navLinks.forEach(navbarLink => {
                navbarLink.classList.remove('change');
            });
            navLinks[i].classList.add('change');
        }
    });
    if(window.pageYOffset + window.innerHeight >= progress.offsetTop){
        document.querySelectorAll('.progress-percent').forEach((el, i) => {
            el.style.width = `${progressBarpercent[i]}%`;
            el.previousElementSibling.firstElementChild.textContent = progressBarpercent[i];
        });
    }
}
mainfn();

window.addEventListener('resize', () => {
window.location.reload();
});