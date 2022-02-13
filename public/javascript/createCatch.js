const searchBtn = document.querySelector('#searchBtn')

const createCatch = (event) => {
      event.preventDefault()

      const catch_title = document.querySelector('#catch_title').value
      const catch_type = document.querySelector('#catch_type').value
      const season = document.querySelector('#season').value
      const catch_description = document.querySelector('#catch_description').value

      console.log(catch_title, catch_type, season, catch_description)
      
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
            res.json(results)
      })
      .catch(err => {
            throw new Error(err)
      })
}

searchBtn.addEventListener('click', createCatch)