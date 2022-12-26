submitHandle = () => {
    const value = document.querySelector("input").value;
    let arr = [];
    const reg = /^[0-9]+$/;
    if (value === "") {
        alert("Nhập số vào!");
    } else {
        arr = value.split(" ");
        arr.forEach(item => {
            if (item.match(reg)) {
                const random = randomElement(arr);
                document.querySelector(".result b").innerHTML = random;
            }
            else {
                alert("chỉ được nhập số");
            }
        });

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