let temp = true;
let graphEl = document.getElementById('plot');
graphEl.classList.add('d-none')


function predictToggle() {
    let graphEl = document.getElementById('plot');
    
    if (temp === false) {
        graphEl.classList.remove('d-none');
        temp = true;
    } else {
        graphEl.classList.add('d-none');
        temp = false;
    }
}


