const toggle_switch = document.getElementById('toggle-switch');
const top_btn = document.getElementById('top-btn');
const falling_container= document.getElementById('falling-container');
const falling_checks = document.getElementById('falling-checks');
const check = document.getElementById('check');
const setting = document.getElementById('setting');
const slidingWrapper = document.querySelector('.sliding-wrapper');

let currentIndex = 0;

const createdNumbers = new Set();

let fallingnuminterval;

setting.addEventListener('click', function() {
    if(this.checked) {
        clearInterval(fallingnuminterval);
    } else {
        fallingnuminterval = setInterval(createFallingNumbers, 100);
    }
});

toggle_switch.addEventListener('click', function() {
    if (document.body.classList.contains('darkmode')) {
        document.body.classList.remove('darkmode');
    } else {
        document.body.classList.add('darkmode');
    }
});

top_btn.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

check.addEventListener('change', function() {
    if(this.checked) {
        falling_container.style.display = "none";
    } else {
        falling_container.style.display = "block";
    }
});

window.addEventListener('resize', function() {
    if(window.innerWidth >= 768) {
        check.checked = false;
        falling_container.style.display = "block";
    }
});

function slideShow() {
    currentIndex++;
    if (currentIndex >= document.querySelectorAll('.img_container').length) {
        currentIndex = 0;
    }
    slidingWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        top_btn.style.display = "block";
    } else {
        top_btn.style.display = "none";
    }
}
;
function createFallingChecks() {
    const check = document.createElement('div');
    check.classList.add('checks');
    check.textContent = "✔";
    check.style.left = `${Math.random() * 98}vw`;
    check.style.animationDuration = `${Math.random() * 5 + 2}s`;
    falling_checks.appendChild(check);

    check.addEventListener('animationend', () => {
        check.remove();
    })
    
};

function createFallingNumbers() {
    const number = document.createElement('div');
    number.classList.add('number');
    number.textContent = Math.random() < 0.5 ? '0' : '1';
    number.style.left = `${Math.random() * 98}vw`;
    number.style.animationDuration = `${Math.random() * 5 + 2}s`;
    falling_container.appendChild(number);

    // Remove the number after it falls out of view
    number.addEventListener('animationend', () => {
        number.remove();
    });
};


var typing = new Typed(".typing_text", {
    strings: ["Software Development!", "Game Development!", "Web Development!"],
    loop: true,
    typeSpeed: 150,
    backSpeed: 50,
    backDelay: 500,
});

window.onscroll = function() {
    scrollFunction();
};

// setInterval(createFallingChecks, 100);
fallingnuminterval = setInterval(createFallingNumbers, 100);
setInterval(slideShow, 3000); // Slide every 3 seconds