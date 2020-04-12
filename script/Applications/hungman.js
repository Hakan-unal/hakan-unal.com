// Html dökümanı üzerindeki gerekli elementler yakalandı
const trial = document.querySelector("#trial");
const word = document.querySelector("#row");
const letter = document.querySelector("#letter");
const input = document.querySelector("#input");
const button = document.querySelector("#button");
const result = document.querySelector("#result");

const words = ["besiktas", "html", "frontend"];
const size = words.length - 1;

// Sayfa her yüklendiğinde aynı soru gelmemesi için aşağıdaki method sayesinde array
// içerisinden sürekli farklı eleman gelmesi sağlandı
const select = Math.round(Math.random() * size);
const selectedWord = words[select];
let trials = 9;

// Fonksiyona gönderilen selected kelimesi'nin harf sayısına göre aşağıdaki fonksiyon
// çalıştı ve word değişkeninin içerisine innerHTML methodu ile harf sayısı kadar
// sütun satır içerisine oluşturuldu
const getWord = (selected) => {
    let count = selected.length;
    for (let i = 0; i < count; i++) {
        word.innerHTML += `
        <div class="col border mx-1">
        <p id="harf${i}">
        </div>
         `
    }

    // trial değişkeninin value'sine trials değişkeni tanımlandı kullanıcı kaç deneme
    // hakkı kaldığını görebilsin diye
    trial.value = trials;
}

// Fonksiyona gönderilen findletter(harf) parametresi üzerinden fonksiyon işlem yapıyor
// aranan harf kelime içerisinde yer alıyorsa querySelector ile harfin kelime
// içerisinde bulunduğu yer yakalanır ve harf upperCase methodu kullanıldıktan
// sonra oraya yazılır
const findLetter = (findLetter) => {
    const size = selectedWord.length;
    for (let i = 0; i < size; i++) {
        if (selectedWord[i] === findLetter) {
            target = `#harf${i}`
            document.querySelector(target).innerText = findLetter.toUpperCase();
        }
    }
    trial.value = trials;
}

// Eğer fonksiyona gönderilen val parametresi karakter uzunluğu 1 değilse kullanıcı
// tek karakter girmemiştir ve fonksiyon çalışmaz. Daha sonra devam eden işlem bloğunda
// bu sefer deneme hakkı kalmamışsa oyun başlamaz
const getLetter = (val) => {
    if (val.length === 1) {
        if (trials > 0) {
            trials--;
            findLetter(val);
        } else {
            alert("Try Again :(");
        }

    } else {
        alert("Invalid Value");
    }
}

// Kullanıcının deneme hakkı bitmeden oyunun bittiğini anlamak için böyle bir fonksiyon
// yazıldı bu fonksiyon yerine sıradaki kelimeyi getiren bir fonksiyonda yazılabilirdi
// ilk kod bloğunda ekrandaki tüm sütunların içerisindeki değer letterArray içerisine
// push methodu ile alındı
const controller = () => {
    const size = selectedWord.length;
    let letterArray = [];
    for (let i = 0; i < size; i++) {
        target = `#harf${i}`
        letterArray.push(document.querySelector(target).innerText);
    }

    // ikinci kod bloğunda count değişkeni tutuldu ve letterArray içerisindeki tüm 
    // değerler döndürüldü eğer değer "" değilse count değişkeni 1 arttırıldı çünkü bu
    // sayede ekrandaki kaç kutucuğun dolu olduğunu öğrenebiliriz
    let len = letterArray.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
        if (letterArray[i] !== "") {
            count++;
        }
    }

    // Eğer size yani kelimenin uzunluğu count değişkenine eşitse ekranda gösterilen tüm
    // kutucuklar dolmuşdemektir ve bu aşamada oyun bitmelidir. Oyun sonu için ekleme
    // yapacaksan buraya yapabilirsin
    if (size == count) {
        result.value = `!!  ${selectedWord.toUpperCase()}  !!`;
    }
}

// button değişkenine click event'i gerçekleştiğinde aşağıdaki kod bloğu çalışır
button.addEventListener("click", () => {
    let value = input.value;
    getLetter(value);
    input.value = "";
    controller();
});

getWord(selectedWord);