const searchBtn = document.querySelector('#searchBtn')

const createCatch = (event) => {
      event.preventDefault()

      const catch_title = document.querySelector('#catch_title').value
      const catch_type = document.querySelector('#catch_type').value
      const season = document.querySelector('#season').value
      const catch_description = document.querySelector('#catch_description').value

      fetch('/api/createcatch', {
            method: "POST",
            body: JSON.stringify({
                  catch_title,
                  catch_type,
                  season,
                  catch_description
            })
      })
      .then(results => {
            return results.json()
      })
      .catch(err => {
            throw new Error(err)
      })

      catch_title.textContent = '',
      catch_type.textContent = '',
      season.textContent = '',
      catch_description.textContent = ''
}

searchBtn.addEventListener('click', createCatch)