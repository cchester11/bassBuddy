const search = document.querySelector('#searchBtn')
const longitude = document.getElementById('longitude').value
const latitude = document.getElementById('latitude').value
const date = document.getElementById("date").value
const tz = document.getElementById('tz').value

function fetchUrl() {
    fetch(`https://api.solunar.org/solunar/${longitude},${latitude},${date},${tz}`)
        .then(results => {
            return results.json()
        })
        .then(data => {
            console.log(data)
        })
}

search.addEventListener('click', fetchUrl)