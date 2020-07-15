document.addEventListener("DOMContentLoaded", () => {

    // Man Elements
    const manWeight = document.querySelector("#manWeight");
    const manHeight = document.querySelector("#manHeight");
    const manResult = document.querySelector("#manResult");
    const manForm = document.querySelector("#manForm");
    const manAdvice = document.querySelector("#manAdvice");

    // Women Elements
    const womanWeight = document.querySelector("#womanWeight");
    const womanHeight = document.querySelector("#womanHeight");
    const womanResult = document.querySelector("#womanResult");
    const womanForm = document.querySelector("#womanForm");
    const womanAdvice = document.querySelector("#womanAdvice");



    const manCalculator = (weight, height) => {
        const result = weight / Math.pow(height, 2) * 10000;

        if (result >= 5 && result < 20) {
            manResult.innerText = `Your index: ${result.toPrecision(4)} You are so weak:(`;
        } else if (result >= 20 && result < 25) {
            manResult.innerText = `Your index: ${result.toPrecision(4)} You are so ideal :)`;
        } else if (result >= 25 && result < 30) {
            manResult.innerText = `Your index: ${result.toPrecision(4)} You are a little fat:(`;
        } else if (result >= 30 && result < 35) {
            manResult.innerText = `Your index: ${result.toPrecision(4)} You are so fat :(((`;
        } else if (result >= 35 && result < 50) {
            manResult.innerText = `Your index: ${result.toPrecision(4)} You are so so so fat you should go to doctor`;
        } else {
            alert("Geçersiz değer")
        }

        manWeight.value = "";
        manHeight.value = "";
    }

    const womanCalculator = (weight, height) => {
        const result = weight / Math.pow(height, 2) * 10000;

        if (result >= 5 && result < 18) {
            womanResult.innerText = `Your index: ${result.toPrecision(4)} You are so weak:(`;
        } else if (result >= 18 && result < 23) {
            womanResult.innerText = `Your index: ${result.toPrecision(4)} You are so ideal :)`;
        } else if (result >= 23 && result < 28) {
            womanResult.innerText = `Your index: ${result.toPrecision(4)} You are a little fat:(`;
        } else if (result >= 28 && result < 33) {
            womanResult.innerText = `Your index: ${result.toPrecision(4)} You are so fat :(((`;
        } else if (result >= 33 && result < 48) {
            womanResult.innerText = `Your index: ${result.toPrecision(4)} You are so so so fat you should go to doctor`;
        } else {
            alert("Geçersiz değer")
        }

        womanWeight.value = "";
        womanHeight.value = "";
    }


    const manAdviceCalculator = (weight, height) => {
        const maxValue = 25 * (Math.pow(height, 2) / 10000);
        const minValue = 20 * (Math.pow(height, 2) / 10000);
        manAdvice.innerText = `Your ideal weight range: ${minValue.toPrecision(4)} - ${maxValue.toPrecision(4)}`;
    }

    const womanAdviceCalculator = (weight, height) => {
        const maxValue = 23 * (Math.pow(height, 2) / 10000);
        const minValue = 18 * (Math.pow(height, 2) / 10000);
        womanAdvice.innerText = `Your ideal weight range: ${minValue.toPrecision(4)} - ${maxValue.toPrecision(4)}`;
    }



    manForm.addEventListener("submit", (event) => {
        const weight = Number(manWeight.value);
        const height = Number(manHeight.value);
        manCalculator(weight, height);
        manAdviceCalculator(weight, height);

        event.preventDefault();
    })

    womanForm.addEventListener("submit", (event) => {
        const weight = Number(womanWeight.value);
        const height = Number(womanHeight.value);
        womanCalculator(weight, height);
        womanAdviceCalculator(weight, height);

        event.preventDefault();
    })
})