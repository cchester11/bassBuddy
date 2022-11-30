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
                        let deleteBtn = document.createElement('button')
                        deleteBtn.textContent = 'Delete Catch'
                        let favoriteBtn = document.createElement('button')
                        favoriteBtn.textContent = 'Favorite'

                        colDiv.setAttribute('class', 'col p-3 catch-cols card bg-info')
                        deleteBtn.setAttribute('class', 'btn btn-danger catch-log-delete-btn')
                        deleteBtn.setAttribute('id', `${fish[i].id}`)
                        favoriteBtn.setAttribute('class', 'btn btn-primary m-2')
                        favoriteBtn.setAttribute('id', `${fish[i].id}`)

                        colDiv.appendChild(title)
                        colDiv.appendChild(species)
                        colDiv.appendChild(season)
                        colDiv.appendChild(description)
                        colDiv.appendChild(favoriteBtn)
                        colDiv.appendChild(deleteBtn)
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

betaDiv.addEventListener('click', async (event) => {
      event.preventDefault()

      let id = event.target.id
      let el = event.target.textContent

      if(el === 'Favorite') {
            const response = await fetch('/api/favorite', {
                  method: 'put',
                  body: JSON.stringify({
                        id: id,
                        favorite: 1
                  }),
                  headers: { 'Content-Type': 'application/json' }
            })

            if(response.ok) {
                  document.location.reload()
                  return;
            } else {
                  window.alert('Sorry we encountered a server error')
                  return;
            }
      } else if(el === 'Delete Catch') {
            const response = await fetch('/api/deletecatch', {
                  method: 'delete',
                  body: JSON.stringify({
                        id: id
                  }),
                  headers: { 'Content-Type': 'application/json' }
            })

            if(response.ok) {
                  document.location.reload()
                  return;
            } else {
                  window.alert('Sorry we encountered a server error')
                  return;
            }
      }
});

