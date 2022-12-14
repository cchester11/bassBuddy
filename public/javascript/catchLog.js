const catchLogDiv = document.getElementById('catchLogDiv')
const betaDiv = document.getElementById('betaDiv')
const add_image_modal = document.getElementById('add-image-modal')
const add_image_input = document.getElementById('add-image-input')
const input_image_id = document.getElementById('image-id')
const submit_image_button = document.getElementById('submit-image-button')

async function renderAllCatches() {
      await fetch('/api/getallcatches', {
            method: "GET",
            headers: ({ 'Content-Type': 'application/json' })
      })
            .then(response => response.json())
            .then(data => {
                  let fish = data.rows

                  for (let i = 0; i < fish.length; i++) {
                        // create cards for each catch (see dataReader for specs)
                        const colDiv = document.createElement('div')
                        let title = document.createElement('h5')
                        title.textContent = fish[i].catch_location
                        let species = document.createElement('ul')
                        species.textContent = fish[i].catch_species
                        let season = document.createElement('ul')
                        season.textContent = fish[i].season
                        let description = document.createElement('ul')
                        description.textContent = fish[i].catch_description
                        let date = document.createElement('ul')
                        date.textContent = fish[i].catch_date
                        let deleteBtn = document.createElement('button')
                        deleteBtn.textContent = 'Delete Catch'
                        let favoriteBtn = document.createElement('button')
                        favoriteBtn.textContent = 'Favorite'

                        colDiv.setAttribute('class', 'col p-3 catch-cols card bg-info')
                        deleteBtn.setAttribute('class', 'btn btn-danger catch-log-delete-btn')
                        deleteBtn.setAttribute('id', `${fish[i].id}`)
                        favoriteBtn.setAttribute('class', 'btn btn-primary m-2')
                        favoriteBtn.setAttribute('id', `${fish[i].id}`)

                        if(fish[i].catch_image == null) {
                              let add_image_button = document.createElement('button')
                              add_image_button.textContent = 'Add Image'
                              add_image_button.setAttribute('class', 'btn btn-primary')
                              add_image_button.setAttribute('id', `${fish[i].id}`)
                              colDiv.appendChild(add_image_button)
                        } 
                        if(fish[i].catch_image != null) {
                              let image_button = document.createElement('button')
                              image_button.textContent = 'See Image'
                              image_button.setAttribute('class', 'btn btn-primary')
                              image_button.setAttribute('id', `${fish[i].id}`)
                              colDiv.appendChild(image_button)
                        }

                        colDiv.appendChild(title)
                        colDiv.appendChild(species)
                        colDiv.appendChild(season)
                        colDiv.appendChild(description)
                        colDiv.appendChild(date)
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
};

renderAllCatches();

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
      } else if(el === 'Add Image') {
            add_image_modal.setAttribute('style', 'display: block')
            localStorage.setItem('image_id', JSON.stringify(id))
      } else if(el === 'See Image') {
            console.log('see image button clicked')
      }
});

add_image_input.addEventListener('change', async (event) => {
      event.preventDefault()
      const id = await JSON.parse(localStorage.getItem('image_id'))
      JSON.stringify(id)
      input_image_id.value = id
});

submit_image_button.addEventListener('', async (event) => {
      event.preventDefault()

      add_image_modal.setAttribute('style', 'display: none')
      const id = JSON.parse(localStorage.getItem('image-id'))
      setInterval(await fetch('/api/find_catch_image', {
            method: 'post',
            body: JSON.stringify({
                  id: id
            }),
            headers: {'Content-Type': 'application/json'}
      })
            .then(results => {
                  return results.json()
            })
            .then(data => {
                  if(data.rows === NULL) {
                        window.alert('Server error')
                  }

                  document.location.replace('/catchlog')
            })
      , 2000)
});