const longitude = document.getElementById('longitude').value
const latitude = document.getElementById('latitude').value
const date = document.getElementById("date").value
const tz = document.getElementById('tz').value
// const section = document.getElementById('section')

function fetchUrl() {
    fetch('https://api.solunar.org/solunar/' + longitude + ',' + latitude + ',' + date + ',' + tz, {
        method: "GET",
        headers:{"Content-Type": "application/JSON"}
    })
        .then(results => {
            return results.json()
        })
        .then(data => {
            let sunrise = data.sunRise
            console.log(sunrise)
        })
}


