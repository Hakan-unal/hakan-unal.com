document.addEventListener("DOMContentLoaded", () => {

    const icon = document.querySelector("#icon");
    const audio = document.querySelector("#audio");
    const backwardIcon = document.querySelector("#backwardIcon");
    const playpauseIcon = document.querySelector("#playpauseIcon");
    const forwardIcon = document.querySelector("#forwardIcon");
    const progresBar = document.querySelector("#progresBar");
    const musicListButton1 = document.querySelector("#musicListButton1");
    const musicListButton2 = document.querySelector("#musicListButton2");
    const musicListButton3 = document.querySelector("#musicListButton3");
    const musicSource = document.querySelector("#musicSource")

    const musics = ["../../audio/cennet.mp3", "../../audio/summer.mp3", "../../audio/ukulele.mp3"]
    const songIndex = 0;


    backwardIcon.addEventListener("click", () => {
        --songIndex
        if (songIndex === -1) {
            songIndex = 2;
            audio.setAttribute("src", `${musics[songIndex]}`);
            playpauseIcon.setAttribute("class", "far fa-pause-circle fa-3x");
            audio.play();
        } else {
            audio.setAttribute("src", `${musics[songIndex]}`);
            playpauseIcon.setAttribute("class", "far fa-pause-circle fa-3x");
            audio.play();
        }
    })


    forwardIcon.addEventListener("click", () => {
        ++songIndex
        if (songIndex === 3) {
            songIndex = 0;
            audio.setAttribute("src", `${musics[songIndex]}`);
            playpauseIcon.setAttribute("class", "far fa-pause-circle fa-3x");
            audio.play();
        } else {
            audio.setAttribute("src", `${musics[songIndex]}`);
            playpauseIcon.setAttribute("class", "far fa-pause-circle fa-3x");
            audio.play();
        }

    })


    musicListButton1.addEventListener("click", (event) => {
        audio.setAttribute("src", `${musics[0]}`);
        playpauseIcon.setAttribute("class", "far fa-pause-circle fa-3x");
        audio.play();
        event.preventDefault();
    })

    musicListButton2.addEventListener("click", (event) => {
        audio.setAttribute("src", `${musics[1]}`);
        playpauseIcon.setAttribute("class", "far fa-pause-circle fa-3x");
        audio.play();
        event.preventDefault();

    })

    musicListButton3.addEventListener("click", (event) => {
        audio.setAttribute("src", `${musics[2]}`);
        playpauseIcon.setAttribute("class", "far fa-pause-circle fa-3x");

        audio.play();

        event.preventDefault();
    })

    playpauseIcon.addEventListener("click", () => {

        if (playpauseIcon.className === "far fa-pause-circle fa-3x") {
            playpauseIcon.setAttribute("class", "far fa-play-circle fa-3x");
            audio.pause();
        } else if (playpauseIcon.className === "far fa-play-circle fa-3x") {
            playpauseIcon.setAttribute("class", "far fa-pause-circle fa-3x");
            audio.play();
        }
    })


    audio.addEventListener("play", () => {
        icon.setAttribute("class", "fab fa-napster fa-6x fa-spin")
    })


    audio.addEventListener("pause", () => {
        icon.setAttribute("class", "fab fa-napster fa-6x")

    })


    setInterval(() => {
        if (audio.currentTime !== 0) {
            progresBar.setAttribute("style", `background-color: black; width:${audio.currentTime / audio.duration * 100}px;`);
        }
    }, 1000);
})