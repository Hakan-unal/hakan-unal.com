// Html dökümanı üzerindeki gerekli elemenler yakalandı
const green = document.querySelector("#green");
const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const result = document.querySelector("#result");
const greenBox = document.querySelector("#greenBox");
const redBox = document.querySelector("#redBox");
const blueBox = document.querySelector("#blueBox");
const colorName = document.querySelector("#colorName");
const colorNameHex = document.querySelector("#colorNameHex");

// Aşağıdaki fonksiyon çağırıldğında html dökümanı üzerindeki colorName, colorNameHex ile yakalanan
// elementlere rengin rgb ve hex karşılığındaki kodu yazılır. result ile yakalanan html elementinin 
// ise bg style'i color değişkeniyle değiştirilir
const creator = () => {
    let color = `rgb(${red.value},${green.value},${blue.value})`;
    let hexresult = "#" + fullColorHex(red.value, green.value, blue.value);
    result.style.backgroundColor = color;
    colorName.innerText = color;
    colorNameHex.innerText = hexresult;
}

// Bu fonksiyona gönderilen rgb parametresi üzerinden gelen sayı hexadecimal sayıya çevirilerek fonksiyonun 
// çağırıldığı yere return edildi
const rgbToHex = (rgb) => {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
};

// Bu fonksiyona gönderilen r, g, ve b parametreleri üzerinden elde edilen rengin hex kodu elde edildi ve 
// fonksiyonun çağırıldığı yere return edildi
const fullColorHex = (r, g, b) => {
    let red = rgbToHex(r);
    let green = rgbToHex(g);
    let blue = rgbToHex(b);
    return red + green + blue;
};

// green değişkenine input event'i gerçekleştiğinde aşağıdaki fonksiyon çağırıldı
green.addEventListener("input", (event) => {
    greenBox.style.backgroundColor = `rgb(0,${green.value},0)`;
    creator();
});

// blue değişkenine input event'i gerçekleştiğinde aşağıdaki fonksiyon çağırıldı
blue.addEventListener("input", (event) => {
    blueBox.style.backgroundColor = `rgb(0,0,${blue.value})`;
    creator();
});

// red değişkenine input event'i gerçekleştiğinde aşağıdaki fonksiyon çağırıldı
red.addEventListener("input", (event) => {
    redBox.style.backgroundColor = `rgb(${red.value},0,0)`;
    creator();
});

creator();