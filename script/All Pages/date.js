
const getMonth = (month) => {
    let result;
    switch (month) {
        case 0: result = "January"; break;
        case 1: result = "February"; break;
        case 2: result = "March"; break;
        case 3: result = "April"; break;
        case 4: result = "May"; break;
        case 5: result = "June"; break;
        case 6: result = "July"; break;
        case 7: result = "August"; break;
        case 8: result = "September"; break;
        case 9: result = "October"; break;
        case 10: result = "November"; break;
        case 11: result = "December"; break;

    }
    return result;
}

window.document.onload = function (e) {
    const dateHtml = document.querySelector("#dateNavbar");
    let date = new Date();
    let day = date.getDate()
    let month = getMonth(date.getMonth());
    let year = date.getFullYear();
    const result = `${day} ${month} ${year}`;
    dateHtml.innerText = result;
};

window.document.onload();



