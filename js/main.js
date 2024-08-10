



const swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    spaceBetween: 20,
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
});
const swiper__reviews = new Swiper('.swiper__reviews', {
    slidesPerView: "auto",
    spaceBetween: 20,
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar__reviews",
      hide: false,
    },
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
    }
    });
}

const openModalButtons = document.querySelectorAll('.protfolio-btn');
const modals = document.querySelectorAll('.my-modal');
const overlay = document.getElementById('myOverlay');
let vid = document.getElementById("theVideo");

openModalButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        modals[index].classList.add('active')
        overlay.classList.add('active')
    });
});


modals.forEach((modal) => {
    const closeButton = modal.querySelector('.close');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
        overlay.classList.remove('active')
        modal.classList.remove('active')
        vid.pause(); 
        });
    }
});

modals.forEach((modal) => {
if (overlay) {
    overlay.addEventListener('click', () => {
        overlay.classList.remove('active')
        modal.classList.remove('active')
        vid.pause(); 
    });
}
});

new WOW().init();