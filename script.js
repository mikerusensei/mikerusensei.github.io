const toggle_switch = document.getElementById('toggle-switch');
const top_btn = document.getElementById('top-btn');
const falling_container= document.getElementById('falling-container');
const falling_checks = document.getElementById('falling-checks');
const createdNumbers = new Set();

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
setInterval(createFallingNumbers, 100);