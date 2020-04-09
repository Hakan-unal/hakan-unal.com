// Html dökümanı üzerindeki gerekli elementler yakalandı
const horoscope = document.querySelector("#horoscope")
const result = document.querySelector("#result");

// Fonksiyona gönderilen obj parametresi üzerinden result olarak tanımlanan değişkenin html'sine aşağıdaki
// kod bloğu eklendi. Arayüzle birlikte daha anlaşılır
const createTable = (obj) => {
    result.innerHTML = `
    <p><b>Burç</b>:  ${obj.burc}</p>
    <p><b>Gezegen</b>:  ${obj.gezegen}</p>
    <p><b>Uğurlu Taş</b>:  ${obj.ugurluTas}</p>
    <p><b>Olumlu Özellikler</b>:  ${obj.olumlu}</p>
    <p><b>Olumsuz Özellikler</b>:  ${obj.olumsuz}</p>
    <p><b>Tarih</b>:  ${obj.tarih}</p>
    `;
}

// Aşağıdaki fonksiyon object parametresi üzerinden kullanıcının girdiği input(horoscope.value) ile object
// üzerinde gelen her objeyi karşılaştırarak eşleşme sağlandığında kullanıcığının seçtiği burca ait objeyi
// createTable fonksiyonuna gönderiyor
const calculate = (object) => {
    object.horoscope.forEach(obj => {
        if (horoscope.value == obj.burc) {
            createTable(obj);
        }
    });
}

// horoscope.json pathinde yer alan veri json veriye parse ediliyor ve kullnılabilir obje haline geldiğinde
// calculate fonksiyonunun içerisine gönderiliyor
const getJson = () => {
    fetch("../json/horoscope.json").then(response => response.json()).then(data => {
        calculate(data);
    }).catch(err => alert("hata"));
}

// horoscope değişkenine click event'i gerçekleştiğinde aşağıdaki fonksiyon çalışır
horoscope.addEventListener("change", getJson);

getJson();