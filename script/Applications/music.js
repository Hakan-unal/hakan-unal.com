document.addEventListener("DOMContentLoaded", () => {

    const icon = document.querySelector("#icon");
    const audio = document.querySelector("#audio");
    const backwardIcon = document.querySelector("#backwardIcon");
    const playpauseIcon = document.querySelector("#playpauseIcon");
    const forwardIcon = document.querySelector("#forwardIcon");
    const progresBar = document.querySelector("#progresBar");

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
            progresBar.setAttribute("style", `background-color: black; width:${audio.currentTime/audio.duration*100}px;`);
        }
    }, 1000);
})