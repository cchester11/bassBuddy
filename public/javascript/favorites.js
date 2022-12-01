const favoriteLogDiv = document.getElementById('favoriteLogDiv')
const betaDiv = document.getElementById('betaDiv')

async function getAllFavorites() {
      await fetch('/api/favorites', {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
      })
            .then(results => {
                  return results.json()
            })
            .then(data => {
                  let favorites = data.rows

                  for (let i = 0; i < favorites.length; i++) {
                        const colDiv = document.createElement('div')

                        let title = document.createElement('h5')
                        title.textContent = favorites[i].catch_title
                        let species = document.createElement('ul')
                        species.textContent = favorites[i].catch_type
                        let season = document.createElement('ul')
                        season.textContent = favorites[i].season
                        let description = document.createElement('ul')
                        description.textContent = favorites[i].catch_description
                        let deleteBtn = document.createElement('button')
                        deleteBtn.textContent = 'Delete Catch'
                        let unfavoriteBtn = document.createElement('button')
                        unfavoriteBtn.textContent = 'Unfavorite'

                        colDiv.setAttribute('class', 'col p-3 catch-cols card bg-info')
                        deleteBtn.setAttribute('class', 'btn btn-danger catch-log-delete-btn')
                        deleteBtn.setAttribute('id', `${favorites[i].id}`)
                        unfavoriteBtn.setAttribute('class', 'btn btn-primary m-2')
                        unfavoriteBtn.setAttribute('id', `${favorites[i].id}`)

                        colDiv.appendChild(title)
                        colDiv.appendChild(species)
                        colDiv.appendChild(season)
                        colDiv.appendChild(description)
                        colDiv.appendChild(unfavoriteBtn)
                        colDiv.appendChild(deleteBtn)
                        betaDiv.appendChild(colDiv)
                        favoriteLogDiv.appendChild(betaDiv)
                  }
            })
}

getAllFavorites()

betaDiv.addEventListener('click', async (event) => {
      event.preventDefault()

      let id = event.target.id
      let el = event.target.textContent

      if (el === 'Unfavorite') {
            const response = await fetch('/api/favorite', {
                  method: 'put',
                  body: JSON.stringify({
                        id: id,
                        favorite: 0
                  }),
                  headers: { 'Content-Type': 'application/json' }
            })

            if (response.ok) {
                  document.location.reload()
                  return;
            } else {
                  window.alert('Sorry we encountered a server error')
                  return;
            }
      } else if (el === 'Delete Catch') {
            const response = await fetch('/api/deletecatch', {
                  method: 'delete',
                  body: JSON.stringify({
                        id: id
                  }),
                  headers: { 'Content-Type': 'application/json' }
            })

            if (response.ok) {
                  document.location.reload()
                  return;
            } else {
                  window.alert('Sorry we encountered a server error')
                  return;
            }
      }
})

