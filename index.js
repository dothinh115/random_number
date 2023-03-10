import { RandomNumber, Validation } from "./class.js";
const rnumb = new RandomNumber();
let arrShow = document.querySelector(".arrShow");
let input = document.querySelector("input");
let result = document.querySelector(".result b");
const errorEl = document.querySelector(".invalid-feedback");
let mainError = "";

const renderHTML = () => (arrShow.innerHTML = rnumb.render());

window.removeNumber = (index) => {
  rnumb.removeNumber(index);
  renderHTML();
};

const inputChangeHandle = (e) => {
  if (e.key === "Enter") return;
  const error = new Validation(input.value, rnumb.arr);
  error.validFunction();
  mainError = error.showError();
  return showError(mainError);
};

const submitHandle = (e) => {
  e.preventDefault();
  if (input.value === "") return showError("Nhập số vào!");
  if (!mainError) {
    rnumb.addNumber(input.value);
    input.value = "";
    renderHTML();
  }
};

const showError = (message) => {
  errorEl.innerText = message;
  message
    ? input.classList.add("is-invalid")
    : input.classList.remove("is-invalid");
};

window.showResult = () =>
  rnumb.arr.length === 0
    ? showError("Nhập số vào mảng đã!")
    : (result.innerText = rnumb.randomNumber());

document
  .querySelector("form")
  .addEventListener("keyup", (e) => inputChangeHandle(e));
document
  .querySelector("form")
  .addEventListener("submit", (e) => submitHandle(e));
renderHTML();
