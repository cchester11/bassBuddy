let searchBtn = document.querySelector('#searchBtn')

function saveTask(one, two, three, four) {
    localStorage.setItem('longitude', JSON.stringify(one))
    localStorage.setItem('latitude', JSON.stringify(two))
    localStorage.setItem('date', JSON.stringify(three))
    localStorage.setItem('tz', JSON.stringify(four))
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

            sunrise.textContent = "Sun Rise:  " + data.sunRise
            suntransit.textContent = "Sun Transit: " + data.sunTransit
            sunset.textContent = "Sun Set: " + data.sunSet
            moonrise.textContent = "Moon Rise: " + data.moonRise
            moontransit.textContent = "Moon Transit: " + data.moonTransit;
            moonset.textContent = "Moon Set: " + data.moonSet
            moonphase.textContent = "Moon Phase: " + data.moonPhase
            moonillumination.textContent = "Moon Illumination: " + data.moonIllumination
            dayrating.textContent = "Quality: " + data.dayRating

            longitude.value = ''
            latitude.value = ''
            date.value = ''
            tz.value = ''

            if(data.dayRating > 2) {
                interpretation.textContent = "Today is a good day for fishing. If the temperature is low, cast deep and locate schools. Use something like a crank with a lip for diving deep."
            } else if(data.dayRating < 2) {
                interpretation.textContent = "Conditions today probably present very high or low pressures with not much change in pressure over the course of the day. You will have to fish aggressively. Entice the fish to impulsively attack your bait. Think jerk baits and rattle traps."
            }
        })
}

function loadTask() { 
    JSON.parse(localStorage.getItem('longitude'))
    JSON.parse(localStorage.getItem('latitude'))
    JSON.parse(localStorage.getItem('date'))
    JSON.parse(localStorage.getItem('tz'))
}

searchBtn.addEventListener('click', fetchUrl)