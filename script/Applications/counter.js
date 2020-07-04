document.addEventListener("DOMContentLoaded", () => {


    const decreaseButton = document.querySelector("#decrease");
    const resetButton = document.querySelector("#reset");
    const increaseButton = document.querySelector("#increase");
    const number = document.querySelector("#number");
    let value = 0;
    number.innerText = value;


    const decreaseFunction = () => {
        value--;

        if (value === 0) {
            number.innerText = value;
            number.setAttribute("class", "d-flex justify-content-center font-weight-bolder h1")
        } else if (value > 0) {
            number.innerText = value;
            number.setAttribute("class", "d-flex justify-content-center font-weight-bolder h1 text-success")
        } else if (value < 0) {
            number.innerText = value;
            number.setAttribute("class", "d-flex justify-content-center font-weight-bolder h1 text-danger")
        }
    }


    const increaseFunction = () => {
        value++;
        if (value === 0) {
            number.innerText = value;
            number.setAttribute("class", "d-flex justify-content-center font-weight-bolder h1")
        } else if (value > 0) {
            number.innerText = value;
            number.setAttribute("class", "d-flex justify-content-center font-weight-bolder h1 text-success")
        } else if (value < 0) {
            number.innerText = value;
            number.setAttribute("class", "d-flex justify-content-center font-weight-bolder h1 text-danger")
        }
    }

    const resetFunction = () => {
        value = 0;
        number.innerText = value;
        number.setAttribute("class", "d-flex justify-content-center font-weight-bolder h1")
    }

    decreaseButton.addEventListener("click", decreaseFunction);
    increaseButton.addEventListener("click", increaseFunction);
    resetButton.addEventListener("click", resetFunction);

});