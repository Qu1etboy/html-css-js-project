const btn_d = document.getElementById("btn-d");
const btn_r = document.getElementById("btn-r");
const btn_i = document.getElementById("btn-i");

var count = 0;

btn_d.addEventListener("click", decrement);
btn_i.addEventListener("click", increment);
btn_r.addEventListener("click", reset);

function decrement() {
    if (count > 0) {
        count -= 1;
        document.getElementById("output").innerText = count;
    }
}

function increment() {
    count += 1;
    document.getElementById("output").innerText = count;
}

function reset() {
    count = 0;
    document.getElementById("output").innerText = count;
}
