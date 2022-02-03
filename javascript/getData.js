const search = document.querySelector('#searchBtn')
const longitude = document.getElementById('longitude')
const latitude = document.getElementById('latitude').value
const date = document.getElementById("date").value
const tz = document.getElementById('tz').value
const url = 'https://api.solunar.org/solunar/42.66,-84.07,20180207,-4'

async function fetchUrl() {
    await fetch('https://api.solunar.org/solunar/42.66,-84.07,20180207,-4')
        .then(results => {
            return results.json()
        })
        .then(data => {
            console.log(data)
        })
}

search.addEventListener('click', console.log(url))

// ${url}${latitude},${longitude},${date},${tz}