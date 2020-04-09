const title = document.querySelector("#title");
const footer = document.querySelector("#footer");
const body = document.querySelector("#body");
const xhr = new XMLHttpRequest();




const display = (obj) => {
    let select = document.createElement('select');
    select.setAttribute('id', 'covid');
    select.setAttribute('class', 'custom-select');
    obj.response.forEach(element => {
        select.innerHTML += `<option id="${element.country}" value="${element.country}">${element.country}</option>`;
    });
    title.appendChild(select);
    let covid = document.querySelector("#covid");
    covid.addEventListener("input", (event) => {
        body.innerHTML = "";
        obj.response.forEach(element => {
            if (event.target.value === element.country) {
                let ul = document.createElement("ul");
                ul.setAttribute("id", "ul");
                ul.setAttribute("class", "pl-1");
                ul.setAttribute("class", "list-group");
                ul.innerHTML = `
                <li class="list-group-item"><b>Total Case:</b>${element.cases.total}</li>
                <li class="list-group-item"><b>New Cases Today:</b>${element.cases.new}</li>
                <li class="list-group-item"><b>Active Cases:</b>${element.cases.active}</li>
                <li class="list-group-item"><b>Critical:</b>${element.cases.critical}</li>
                <li class="list-group-item"><b>Total Deaths:</b>${element.deaths.total}</li>
                `;
                body.appendChild(ul);
                footer.innerText = `Last Updated: ${element.day}`
            }
        });
    });
}


const calculate = () => {
    let url = `https://covid-193.p.rapidapi.com/statistics`;

    xhr.open(`GET`, url, true);
    xhr.withCredentials = true;
    xhr.setRequestHeader("x-rapidapi-host", "covid-193.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "b9b2c05cfamsh40e71d540d40b11p15e7d7jsnb566767fd57d");

    xhr.onload = function () {

        if (this.status === 200) {
            const text = JSON.parse(this.responseText);

            display(text);
        }
    }
    xhr.send();
}


calculate();