const longitude = document.getElementById('longitude').value
const latitude = document.getElementById('latitude').value
const date = document.getElementById("date").value
const tz = document.getElementById('tz').value
const infoArea = document.getElementById('#info_area')

function fetchUrl() {
    fetch('https://api.solunar.org/solunar/' + longitude + ',' + latitude + ',' + date + ',' + tz, {
        method: "GET",
        headers:{"Content-Type": "application/JSON"}
    })
        .then(results => {
            return results.json()
        })
        .then(data => {
            console.log(data)
            infoArea.textContent = data
        })
}      

// const fetchUrl = () => {
//     fetch('https://www.fishwatch.gov/api/species')
//     .then(results => {
//         return results.json()
//     })
//     .then(data => {
//         console.log(data)
//     })
// }

