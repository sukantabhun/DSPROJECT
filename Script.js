

let temp = true;
let graphEl = document.getElementById('plot');
let animateEl = document.getElementById('animate');
let animateTextEl = document.getElementById('animateText');
graphEl.classList.add('d-none')


function predictToggle() {
    let graphEl = document.getElementById('plot');
    let animateEl = document.getElementById('animate');
    let animateTextEl = document.getElementById('animateText');
    if (temp === true) {
        graphEl.classList.remove('d-none');
        animateEl.classList.add('d-none');
        animateTextEl.classList.add('d-none');
        temp = false;
    } else {
        alert('You clicked on the predict button!');
    }
}

function jumpToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}


