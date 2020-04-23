document.addEventListener("DOMContentLoaded", () => {

    const inputBox = document.querySelector("#inputBox");
    const addButton = document.querySelector("#addButton");
    const deleteAll = document.querySelector("#deleteAll");
    const randomButton = document.querySelector("#randomButton");
    const list = document.querySelector("#list");
    const rangeDisplay = document.querySelector("#rangeDisplay");
    const range = document.querySelector("#range");



    const changeRange = () => {
        rangeDisplay.value = range.value;
    }


    const addLocalStorage = () => {
        let item, liste;
        item = inputBox.value;
        liste = JSON.parse(localStorage.getItem("items"));

        if (liste !== null) {
            liste.push(item);
        } else {
            liste = [];
            liste.push(item);
        }

        localStorage.setItem("items", JSON.stringify(liste));
        displayList(liste);

        inputBox.value = "";
    }


    const displayList = (liste) => {
        if (liste !== null) {
            list.innerText = "";
            liste.forEach((element, index) => {
                let li = document.createElement("li");
                li.setAttribute("class", "list-group-item");
                li.innerHTML = `
                ${index + 1}.  ${element}<input type="button" id="${index}" value="Delete" class="btn btn-outline-dark float-right">
                
                `;
                list.appendChild(li);
            });
        }
    }


    const deleteList = () => {
        localStorage.setItem("items", null);
        list.innerText = "";
    }


    const deleteElement = (event) => {
        if (event.target.value === "Delete") {
            let id = Number(event.target.id);
            let liste = JSON.parse(localStorage.getItem("items"));
            liste.splice(id, 1);
            localStorage.setItem("items", JSON.stringify(liste));
            displayList(liste);
        }
    }


    const randomSelection = () => {
        let count = list.childElementCount;
        for (let i = 0; i < count; i++) {
            list.children[i].setAttribute("class", "list-group-item bg-white");
        }


        let sayac = Number(range.value);
        randomButton.setAttribute("disabled", "");

        changeColorTime = setInterval(selection, 1000);

        setTimeout(() => {
            clearInterval(changeColorTime);
            randomButton.removeAttribute("disabled");
            let index = Math.round(Math.random() * (list.children.length - 1));
            setTimeout(() => {
                list.children[index].setAttribute("class", "list-group-item bg-success");
            }, 501)
        }, sayac);

    }


    const selection = () => {
        let index = Math.round(Math.random() * (list.children.length - 1));
        list.children[index].setAttribute("class", "list-group-item bg-warning");
        setTimeout(() => {
            list.children[index].setAttribute("class", "list-group-item bg-white");
        }, 500)

    }





    addButton.addEventListener("click", addLocalStorage);
    deleteAll.addEventListener("click", deleteList);
    randomButton.addEventListener("click", () => {
        if (localStorage.getItem("items") !== "null") {
            randomSelection();
        }
    });
    range.addEventListener("input", changeRange);
    list.addEventListener("click", deleteElement);




    displayList(JSON.parse(localStorage.getItem("items")));

});




