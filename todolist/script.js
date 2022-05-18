var todo = document.getElementById("form-input");
var btn_submit = document.getElementById("btn-submit");

// user can click button or enter key to submit 
btn_submit.addEventListener("click", submited);
todo.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        submited();
    }
});

function submited() {
    if (todo.value == "") {
        alert("Please type something before submit");
        return;
    }

    // create html element
    let intel = document.createElement("div");
    let box = document.createElement("div");
    let text = document.createElement("p");
    let checkbox = document.createElement("input");
    let remove = document.createElement("button");

    // adding attribute class etc.
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("click", () => {
        if (checkbox.checked) {
            box.style.backgroundColor = "#00FFAB";
        }
        else {
            box.style.backgroundColor = "white";
        }
    });
    
    remove.innerText = "Delete";
    remove.addEventListener("click", () => {
        box.remove();
    });
    
    text.innerText = todo.value;
    box.classList.add("box");
    intel.classList.add("intel");

    // append to parent
    intel.appendChild(checkbox);
    intel.appendChild(text);
    box.appendChild(intel);
    box.appendChild(remove);
    document.getElementById("list").appendChild(box);

    // when click set a input value to nothing
    todo.value = "";
}
