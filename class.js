export class RandomNumber {
    arr = [];

    addNumber = (number) => this.arr.push(Number(number));

    render = () => {
        if (this.arr.length === 0) return "Chưa có gì trong mảng";
        const renderHTML = this.arr.reduce((html, item, index) => {
            return html += `
                <span class="badge badge-info mr-1 my-1 px-2 py-1">
                    ${item}
                    <i class="fa-solid fa-xmark icon ml-1" onclick="removeNumber(${index})"></i>
                </span>
            `;
        }, "");
        return "Số đã add: " + renderHTML;
    }

    removeNumber = index => this.arr.splice(index, 1);

    randomNumber = () => {
        const number = this.arr.length;
        const randomNumber = Math.floor(Math.random() * number);
        return this.arr[randomNumber];
    }
}

export class Validation {
    message = "";

    checkIfNumber = value => {
        const reg = /^[0-9]+$/;
        this.message = "";
        if (!value.trim().match(reg) & value.trim() !== "") {
            this.message = "Chỉ được nhập số";
        }
        return this.message;
    }

    checkIfExist = (arr, value) => {
        this.message = "";
        const find = arr.find(item => item == value);
        if (find) {
            this.message = "Số đã tồn tại!";
        }
        return this.message;
    }
}