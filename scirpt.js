document.querySelectorAll('[data-copy]').forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        const text = el.getAttribute('data-copy');
        navigator.clipboard.writeText(text).then(() => {
            el.classList.add('show-tooltip');
            setTimeout(() => el.classList.remove('show-tooltip'), 1000);
        });
    });
});

function handleScroll() {
    const navbar = document.getElementById("navbar");
    const body = document.body;

    if (window.innerWidth > 768) {
        if (window.scrollY > 100) {
            navbar.classList.add("scrolled");
            body.classList.remove("scrolled");
        } else if (window.scrollY > 1) {
            navbar.classList.add("scrolled");
            body.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
            body.classList.remove("scrolled");
        }
    } else {
        navbar.classList.remove("scrolled");
        body.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleScroll);
