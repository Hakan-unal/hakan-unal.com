// Html dökümanı üzerindeki gerekli yerler yakalandı
let city = document.querySelector("#city");

// Apı üzerinden kullanılacak verinin key'i
let key = "759b33b63a60064128f0999e37625466";

// XMLHttpRequest class'ı üzeridnen xhr objesi yaratıldı
let xhr;
xhr = new XMLHttpRequest();

// Aşağıdaki fonksiyona gönderilen obj parametresi üzerinde yer alan bilgilere göre aşağıdaki html elementleri
// yakalandı ve içeriklerine obj üzerinden gelen bilgiler eklendi
const City = (obj) => {
    let cloud = document.querySelector("#cloud");
    let wind = document.querySelector("#wind");
    let weather = document.querySelector("#weather");

    cloud.innerHTML = `<p><b>Cloud</b>:${obj.weather[0].description.toUpperCase()}</p>`;
    wind.innerHTML = `<p><b>Wind</b>:${obj.wind.speed}</p>`;
    weather.innerHTML = `<p><b>Weather</b>:${obj.weather[0].main.toUpperCase()}</p>`;
}

// Aşağıdaki fonksiyon çağırıldığında url içerisindeki bilgilerin dinamik olması için terniere ile
// tanımlamalar yapıldı ve url oluşturulduktan sonra GET methodu ile apıden veri çağırıldı gelen veri
// response edilerek City fonksiyonu içerisne gönderildi
const calculate = () => {
    let cityName = city.value;
    let url = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;

    xhr.open(`GET`, url, true);
    xhr.onload = function () {

        if (this.status === 200) {
            const text = JSON.parse(this.responseText);
            City(text);
        }
    }
    xhr.send();
}

// city değişkenine üzerinde change event'i gerçekleşirse aşağıdaki fonksiyon çalışır.
city.addEventListener('change', calculate);