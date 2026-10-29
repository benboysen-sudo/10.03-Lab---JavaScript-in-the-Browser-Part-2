"use strict";

document.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    document.querySelector("#add-btn").addEventListener("click", addBtnClick);
    document.querySelector("#task-input").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addBtnClick();
        }
    });

    // Existing tasks in the HTML should be removable too
    const doneBtns = document.querySelectorAll(".done-btn");
    for (const btn of doneBtns) {
        btn.addEventListener("click", removeTask);
    }
}

function addBtnClick() {
    const textbox = document.querySelector("#task-input");
    const task = textbox.value;
    if (task !== "") {
        addTask(task);
        textbox.value = "";
    }
    textbox.focus();
}

function addTask(task) {
    const li = document.createElement("li");
    li.innerHTML = '<span class="task-text">' + task + '</span><button class="done-btn">&#10006;</button>';
    document.querySelector("ol").appendChild(li);

    const doneBtns = document.querySelectorAll(".done-btn");
    doneBtns[doneBtns.length - 1].addEventListener("click", removeTask);
}

function removeTask(event) {
    const li = event.target.parentNode;
    li.parentNode.removeChild(li);
}
