const longitude = document.getElementById('longitude').value
const latitude = document.getElementById('latitude').value
const date = document.getElementById("date").value
const tz = document.getElementById('tz').value
let searchBtn = document.querySelector('#searchBtn')
// const section = document.getElementById('section')

function fetchUrl() {
    fetch('https://api.solunar.org/solunar/' + longitude + ',' + latitude + ',' + date + ',' + tz, {
        method: "GET",
        headers: { "Content-Type": "application/JSON" }
    })
        .then(results => {
            return results.json()
        })
        .then(data => {
            let sunrise = data.sunRise
            console.log(sunrise)
        })
}

function saveTask() {
    localStorage.setItem('longitude', JSON.stringify(longitude))
    localStorage.setItem('latitude', JSON.stringify(latitude))
    localStorage.setItem('date', JSON.stringify(date))
    localStorage.setItem('tz', JSON.stringify(tz))
}

function loadTask() {
    JSON.parse(localStorage.getItem('longitude'))
    JSON.parse(localStorage.getItem('latitude'))
    JSON.parse(localStorage.getItem('date'))
    JSON.parse(localStorage.getItem('tz'))
}

searchBtn.addEventListener('submit', saveTask)

