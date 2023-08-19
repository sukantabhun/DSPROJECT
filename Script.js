let temp = true;
let graphEl = document.getElementById('plot');
let placeHolderEl = document.getElementById('plotPlaceholder');
graphEl.classList.add('d-none')


function predictToggle() {
    let graphEl = document.getElementById('plot');
    let placeHolderEl = document.getElementById('plotPlaceholder');
    if (temp === false) {
        graphEl.classList.remove('d-none');
        placeHolderEl.classList.add('d-none');
        temp = true;
    } else {
        graphEl.classList.add('d-none');
        placeHolderEl.classList.remove('d-none');
        temp = false;
    }
}
