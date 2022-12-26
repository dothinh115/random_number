let arr = [];
let err = "";
const render = () => {
    const arrShow = document.querySelector(".arrShow");
    arrShow.innerHTML = "";
    arrShow.innerText = arr.length === 0 ? "Chưa có gì trong mảng." : "Số đã add: ";
    for (let key in arr) arrShow.append(createBadge(arr[key], key));
}

const createBadge = (inner, index) => {
    var badge = document.createElement("span");
    var icon = document.createElement("i");
    icon.classList = "fa-solid fa-xmark ml-2 icon";
    icon.addEventListener("click", () => removeElement(index));
    badge.classList = "badge badge-info mr-2 px-2 py-1";
    badge.append(inner, icon);
    return badge;
}

const removeElement = index => {
    arr.splice(index, 1);
    render();
}

const inputChangeHandle = (e) => {
    err = "";
    const value = e.target.value;
    const reg = /^[0-9]+$/;
    if (!value.trim().match(reg) && value !== "") return err = "Chỉ được nhập số!";
    const find = arr.find(item => item === value.trim());
    if (find) err = "Số đã có trong mảng!";
}

const submitHandle = (e) => {
    e.preventDefault();
    const value = document.querySelector("input").value;
    if (!err) {
        arr.push(value);
        document.querySelector("input").value = "";
    }
    err = "";
    render();
}

const showError = () => {
    const errorEl = document.querySelector(".invalid-feedback");
    const inputEl = document.querySelector("input");
    errorEl.innerText = err;
    err ? inputEl.classList.add("is-invalid") : inputEl.classList.remove("is-invalid");
}

const showResult = () => {
    const result = document.querySelector(".result b");
    arr.length === 0 ? err = "Nhập số vào mảng đã!" : result.innerText = randomElement(arr);
}

const randomElement = arr => {
    const number = arr.length;
    const randomNumber = Math.floor(Math.random() * number);
    return arr[randomNumber];
}

document.querySelector("form").addEventListener("keyup", (e) => {
    inputChangeHandle(e);
    showError();
});
document.querySelector("form").addEventListener("submit", (e) => submitHandle(e));
render();