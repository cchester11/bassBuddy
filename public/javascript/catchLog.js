const catchLogDiv = document.getElementById('catchLogDiv')
const betaDiv = document.getElementById('betaDiv')

async function renderAllCatches() {
      await fetch('/api/getallcatches', {
            method: "GET",
            headers: ({ 'Content-Type': 'application/json' })
      })
            .then(response => response.json())
            .then(data => {
                  let fish = data.rows

                  for (let i = 0; i < fish.length; i++) {
                        console.log(fish[i])
                        // create cards for each catch (see dataReader for specs)
                        const colDiv = document.createElement('div')

                        let title = document.createElement('h5')
                        title.textContent = fish[i].catch_title
                        let species = document.createElement('ul')
                        species.textContent = fish[i].catch_type
                        let season = document.createElement('ul')
                        season.textContent = fish[i].season
                        let description = document.createElement('ul')
                        description.textContent = fish[i].catch_description
                        colDiv.setAttribute('class', 'col p-3')

                        colDiv.appendChild(title)
                        colDiv.appendChild(species)
                        colDiv.appendChild(season)
                        colDiv.appendChild(description)
                        betaDiv.appendChild(colDiv)
                        catchLogDiv.appendChild(betaDiv)
                  }
            })
            .catch(err => {
                  if (err) {
                        throw new Error(err)
                  }
            })
}

renderAllCatches()