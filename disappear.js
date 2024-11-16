let div = document.getElementById("hiddenItems");
let display = 0;

function showHide() {
    if (display == 1) {
        div.style.display = 'block';
        display = 0;
    }
    else {
        div.style.display = 'none';
        display = 1;
    }
}