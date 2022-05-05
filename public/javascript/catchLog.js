// use catchLogDiv
const catchLogDiv = document.getElementById('catchLogDiv')

async function renderAllCatches () {
      await fetch('/api/getallcatches', {
            method: "GET",
            headers: ({ 'Content-Type': 'application/json'})
      })
            .then(response => response.json())
            .then(data => {
                  let fish = data.rows
                  
                  for(let i = 0; i < fish.length; i ++) {
                        console.log(fish[i])

                        const catchDiv = document.createElement('div')

                        let title = document.createElement('h5')
                        title.textContent = fish[i].catch_title
                        let species = document.createElement('ul')
                        species.textContent = fish[i].catch_type
                        let season = document.createElement('ul')
                        season.textContent = fish[i].season
                        let description = document.createElement('ul')
                        description.textContent = fish[i].catch_description

                        catchDiv.setAttribute('style', "d-flex justify-content-center align-items-start m-5")
                        catchDiv.appendChild(title)
                        catchDiv.appendChild(species)
                        catchDiv.appendChild(season)
                        catchDiv.appendChild(description)

                        catchLogDiv.appendChild(catchDiv)
                  }
            })
            .catch(err => {
                  if(err) {
                        throw new Error(err)
                  }
            })
}

renderAllCatches()