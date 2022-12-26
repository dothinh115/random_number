let arr = [];
const render = () => {
    const arrShow = document.querySelector(".arrShow");
    arrShow.innerHTML = "";
    if(arr.length === 0) {
        arrShow.innerText = "Chưa có gì trong mảng.";
    } else {
        arrShow.append("Số đã add: ");
        for (let key in arr) {
            arrShow.append(createBadge(arr[key], key));
        }
    }
}

const createBadge = (inner, index) => {
    var badge = document.createElement("span");
    var icon = document.createElement("i");
    icon.classList = "fa-solid fa-xmark ml-2 icon";
    icon.addEventListener("click", () => {
        removeElement(index);
    });
    badge.classList = "badge badge-info mr-2";
    badge.append(inner);
    badge.append(icon);
    return badge;
}

const removeElement = index => {
    arr.splice(index, 1);
    render();
}

submitHandle = () => {
    const value = document.querySelector("input").value;
    const reg = /^[0-9]+$/;
    if (value === "") {
        alert("Nhập số vào!");
    } else {
       if(value.trim().match(reg)) {
        const find = arr.find(item => item === value.trim());
        if(find) {
            alert("Số đã có trong mảng!");
        }
        else {
            arr.push(value.trim());
        }
        document.querySelector("input").value = "";
        render();
       }
    }
}

const showResult = () => {
    const result = document.querySelector(".result b");
    if(arr.length === 0) {
        alert("Nhập số vào mảng đã!");
    }
    else {
        result.innerText = randomElement(arr);
    }
}

randomElement = arr => {
    const number = arr.length;
    const randomNumber = Math.floor(Math.random() * number);
    return arr[randomNumber];
}

document.querySelector("form").addEventListener("submit", (event) => {
    submitHandle();
    event.preventDefault();
});

render();