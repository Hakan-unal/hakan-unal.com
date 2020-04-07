// Html dökümanı üzerinde gerekli elementler yakalandı
const currencyOne = document.querySelector("#currency-one");
const currencyTwo = document.querySelector("#currency-two");
const inputOne = document.querySelector("#input-one");
const inputTwo = document.querySelector("#input-two");
const swapButton = document.querySelector("#button");
const date = document.querySelector("#date");
const info = document.querySelector("#info");

// Aşağıdaki fonksiyon çalıştığında fetch methodu ile gönderilen url içerisindeki değer
// response edilir bunun için es6 kullanıldı.response edilen veri json veriye
// dönüştürüldü ve bir sonrqaki fonksiyona gönderildi o fonksiyonda data içerisinde
// yer alan obje üzerinde gerekli işlemler yapıldı ve html üzerine aktarıldı görselle
// birlikte incelersen daha anlaşılır olur
const calculate = () => {
    const currency_one = currencyOne.value;
    const currency_two = currencyTwo.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency_two];
            info.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
            inputTwo.value = (inputOne.value * rate).toFixed(3);
            date.innerText = `Last updated:  ${data.date}`;
        });
}

// currencyOne ve currencyTwo değişkenleri ile tanımlanan html elementi üzerinde
// değişiklik olursa calculate fonksiyonu çağırılır
currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);

// inputOne ve inputTwo değişkenleri ile tanımlanan html elementi üzerinde input değeri
// girilmesi halinde calculate fonksiyonu çalışır
inputOne.addEventListener('input', calculate);
inputTwo.addEventListener('input', calculate);

// swapButton değişkenine click event'i gerçekleştiğinde aşağıdaki gibi swap işlemi
// gerçekleşir ve calculate fonksiyonu çağırılır
swapButton.addEventListener('click', () => {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate();
});

calculate();