// Html dökümanı üzerindeki gerekli elementler yakalandı
const canvas = document.querySelector("#canvas");
const draw = canvas.getContext("2d");

var time = 1000;

// canvas değişkenine click event' gerçekleştiğinde aşağıdaki fonksiyon çalışır
canvas.addEventListener("click", (event) => {

    // Çizimin başlaması için fonksiyon çağırılır
    draw.beginPath();

    // Çizilecek dairenin çizimine başlanacak noktasının konumu ilk 2 parametrede belirtildi. event objesi
    // yani click event'i gerçekleştiği anda mouse'un konumu üzerinde yer alan bilgiler X ve Y koordinatları alındı
    // 40 yarıçap
    // 0 ve 360 hangi açıdan başlanıp hangi açıya kadar çizimin gerçekleşeceğini gösteriyor
    draw.arc(event.clientX, event.clientY, 40, 0, 2 * Math.PI);

    // Çizim bitti
    draw.stroke();
});

// Aşağıdaki fonksiyon 1000ms aralıklarla sürekli çalışır setInterval merhodu sayesinde
const gameStart = () => {
    setInterval(() => {

        // Çizimin başlaması için fonksiyon çağırılır
        draw.beginPath();

        // Oluşturulacak random dairelerin konumları random şekilde aşağıdaki fonksiyonla belirlendi
        const xCoordinate = Math.round(Math.random() * 480) + 10;
        const yCoordinate = Math.round(Math.random() * 480) + 10;

        // Çizilecek dairenin çizimine başlanacak noktasının konumu ilk 2 parametrede belirtildi. 
        // 5 yarıçap
        // 0 ve 360 hangi açıdan başlanıp hangi açıya kadar çizimin gerçekleşeceğini gösteriyor 
        draw.arc(xCoordinate, yCoordinate, 5, 0, 2 * Math.PI);

        // Çizim bitti
        draw.stroke();
    }, (time));
}

// Fonksiyon çağırıldı
gameStart();