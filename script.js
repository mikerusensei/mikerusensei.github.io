const toggle_switch = document.getElementById('toggle-switch');
const falling_container= document.getElementById('falling-container')
const createdNumbers = new Set();

toggle_switch.addEventListener('click', function() {
    if (document.body.classList.contains('darkmode')) {
        document.body.classList.remove('darkmode');
    } else {
        document.body.classList.add('darkmode');
    }
});

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
}


var typing = new Typed(".typing_text", {
    strings: ["Software Development!", "Game Development!", "Web Development!"],
    loop: true,
    typeSpeed: 150,
    backSpeed: 50,
    backDelay: 500,
});

setInterval(createFallingNumbers    , 100);