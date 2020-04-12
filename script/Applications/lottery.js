// Html dökümanı üzerindeki gerekli elementler yakalandı
const ticket = document.querySelector("#ticket");
const lottery = document.querySelector("#lottery");
const buyTicketButton = document.querySelector("#buyTicketButton");
const tryButton = document.querySelector("#tryButton");
const price = document.querySelector("#price");

// hem ticket hem lottery 10 haneli olacağğı için size değişkeni 10'a eşitlendi
const size = 7;
let ticketNumbers, lotteryNumbers;

// Kutucukların içerisinde yer alacak sayılar aşağıdaki fonksiyonda yaratıldı ve
// fonksiyonun çağırıldığı yere retrun edildi
const randomNumberCreator = () => {
    let value = Math.round(Math.random() * 9);
    return value;
}

// ticket değişkeninin mevcut değeri "" bu değere eşitlendikten sonra aşağıdaki kod
// bloğuyla size değişkeni içerisindeki sayı kadar kutucuk oluşturur.
const createTicketBox = () => {
    ticket.innerHTML = "";
    for (let i = 0; i < size; i++) {
        ticket.innerHTML += `<div id="box${i}" class="col border"></div>`;
    }
}

// for döngüsüyle birlikte size kadar random sayı oluşturulur, html dökümanı üzerinde
// kutucuk yakalanır ve sayı kutucuğa yerleştirilir bu işlem size değişkeninin
// içerisindeki sayı kadar devam eder. Fonksiyondan return edilen değer ise kullanıcının
// kazandığı price değerini hesaplayabilmek için random oluşturulan sayıların tek bir
// yerde tutulmasi gerektiğinden dolayı ticketArray içinde tutulup return edildi
const getTicketNumber = () => {
    let ticketArray = [];
    for (let i = 0; i < size; i++) {
        let val = randomNumberCreator();
        let html = `#box${i}`
        document.querySelector(html).innerText = val;
        ticketArray.push(val);
    }
    return ticketArray;
}

// lottery için gerekli kutucuklar aşağıdaki kod bloğuyla yaratıldı
const createLotteryBox = () => {
    lottery.innerHTML = "";
    for (let i = 0; i < size; i++) {
        lottery.innerHTML += `<div id="boxx${i}" class="col border"></div>`;
    }
}

// for döngüsüyle birlikte size kadar random sayı oluşturulur, html dökümanı üzerinde
// kutucuk yakalanır ve sayı kutucuğa yerleştirilir bu işlem size değişkeninin
// içerisindeki sayı kadar devam eder. Fonksiyondan return edilen değer ise kullanıcının
// kazandığı price değerini hesaplayabilmek için random oluşturulan sayıların tek bir
// yerde tutulması gerektiğinden dolayı lotteryArray içinde tutulup return edildi
const getLotteryNumber = () => {
    let lotteryArray = [];
    for (let i = 0; i < size; i++) {
        let val = randomNumberCreator();
        let html = `#boxx${i}`
        document.querySelector(html).innerText = val;
        lotteryArray.push(val);
    }
    return lotteryArray;
}

// lotteryArray ve ticketArray içerisindeki değerler aynı indiste birbirlerine eşit
// olursa kullanıcının kazandığı price değeri 25000 arttırılır ve fonksiyonun 
// çağırıldığı yere count değişkeni return edilir
const controlPrice = () => {
    let count = 0;
    if (ticketNumbers.length == 7 && lotteryNumbers.length == 7) {
        for (let i = 0; i < size; i++) {
            if (ticketNumbers[i] == lotteryNumbers[i]) {
                count += 25000;
            }
        }
        return count;
    }
}

// buyTicketButton değişkenine click event'i gerçekleştiğinde aşağıdaki kod bloğu çalışır
buyTicketButton.addEventListener("click", () => {
    let ticketArray = [];
    createTicketBox();
    ticketArray = getTicketNumber();
    ticketNumbers = ticketArray;
});

// tryButton değişkenine click event'i gerçekleştiğinde aşağıdaki kod bloğu çalışır
tryButton.addEventListener("click", () => {
    let award;
    let lotteryArray = [];
    createLotteryBox();
    lotteryArray = getLotteryNumber();
    lotteryNumbers = lotteryArray;
    award = controlPrice();
    price.value = `${award}$`;
});