import { RandomNumber, Validation } from "./class.js";
const rnumb = new RandomNumber;
const error = new Validation;
let arrShow = document.querySelector(".arrShow");
let input = document.querySelector("input");
let result = document.querySelector(".result b");

const renderHTML = () => arrShow.innerHTML = rnumb.render();

window.removeElement = index => {
    rnumb.removeNumber(index);
    renderHTML();
}

const inputChangeHandle = (e) => {
    if(e.key === "Enter") return;
    showError();
    if(error.checkIfNumber(input.value)) return showError(error.message);
    if(error.checkIfExist(rnumb.arr, input.value)) return showError(error.message);
}

const submitHandle = (e) => {
    e.preventDefault();
    if(input.value === "") return showError("Nhập số vào!");
    if(!error.message) {
        rnumb.addNumber(input.value);
        input.value = "";
        renderHTML();
    }
}

const showError = message => {
    const errorEl = document.querySelector(".invalid-feedback");
    errorEl.innerText = message;
    message ? input.classList.add("is-invalid") : input.classList.remove("is-invalid");
}

window.showResult = () => rnumb.arr.length === 0 ? showError("Nhập số vào mảng đã!") : result.innerText = rnumb.randomNumber();

document.querySelector("form").addEventListener("keyup", (e) => inputChangeHandle(e));
document.querySelector("form").addEventListener("submit", (e) => submitHandle(e));
renderHTML();