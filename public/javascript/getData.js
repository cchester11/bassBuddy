let searchBtn = document.querySelector('#searchBtn')

function saveTask(one, two, three, four) {
    localStorage.setItem('longitude', JSON.stringify(one))
    localStorage.setItem('latitude', JSON.stringify(two))
    localStorage.setItem('date', JSON.stringify(three))
    localStorage.setItem('tz', JSON.stringify(four))

    document.location.reload()
}

const fetchUrl = (event) => {
    event.preventDefault()

    fetch('https://api.solunar.org/solunar/' + longitude.value + ',' + latitude.value + ',' + date.value + ',' + tz.value, {
        method: "GET",
        headers: { "Content-Type": "application/JSON" }
    })
        .then(results => {
            return results.json()
        })
        .then(data => {
            console.log(data)
            saveTask(longitude.value, latitude.value, date.value, tz.value);
            sunrise.textContent = data.sunRise
        })
}

function loadTask() { 
    JSON.parse(localStorage.getItem('longitude'))
    JSON.parse(localStorage.getItem('latitude'))
    JSON.parse(localStorage.getItem('date'))
    JSON.parse(localStorage.getItem('tz'))
}

searchBtn.addEventListener('click', fetchUrl)
loadTask()