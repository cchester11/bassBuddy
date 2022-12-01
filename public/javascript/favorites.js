async function getAllFavorites () {
      await fetch('/api/favorites', {
            method: 'get',
            headers: { 'Content-Type': 'application/json' }
      })
            .then(results => {
                  return results.json()
            })
            .then(data => {
                  let favorites = data.rows

                  for(let i = 0; i < favorites.length; i ++) {
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
                        let favoriteBtn = document.createElement('button')
                        favoriteBtn.textContent = 'Favorite'

                        colDiv.setAttribute('class', 'col p-3 catch-cols card bg-info')
                        deleteBtn.setAttribute('class', 'btn btn-danger catch-log-delete-btn')
                        deleteBtn.setAttribute('id', `${favorites[i].id}`)
                        favoriteBtn.setAttribute('class', 'btn btn-primary m-2')
                        favoriteBtn.setAttribute('id', `${favorites[i].id}`)

                        colDiv.appendChild(title)
                        colDiv.appendChild(species)
                        colDiv.appendChild(season)
                        colDiv.appendChild(description)
                        colDiv.appendChild(favoriteBtn)
                        colDiv.appendChild(deleteBtn)
                        betaDiv.appendChild(colDiv)
                        favoriteLogDiv.appendChild(betaDiv)
                  }
            })
}

getAllFavorites()