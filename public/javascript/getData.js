let longitude = document.getElementById('longitude').value
let latitude = document.getElementById('latitude').value
let date = document.getElementById("date").value
let tz = document.getElementById('tz').value
let searchBtn = document.querySelector('#searchBtn')
// let section = document.getElementById('section')

function loadTask() {
    longitude = JSON.parse(localStorage.getItem('longitude'))
    latitude = JSON.parse(localStorage.getItem('latitude'))
    date = JSON.parse(localStorage.getItem('date'))
    tz = JSON.parse(localStorage.getItem('tz'))
}

function saveTask() {
    localStorage.setItem('longitude', JSON.stringify(longitude))
    localStorage.setItem('latitude', JSON.stringify(latitude))
    localStorage.setItem('date', JSON.stringify(date))
    localStorage.setItem('tz', JSON.stringify(tz))

    document.location.reload()
}

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
            saveTask();
        })
}

loadTask()