const searchBtn = document.querySelector('#searchBtn')

// async function properly sends data to the back end route
async function createCatch (event) {
      event.preventDefault()

      // values are successfully extracted using below variables
      const catch_title = document.querySelector('#catch_title').value
      const catch_type = document.querySelector('#catch_type').value
      const season = document.querySelector('#season').value
      const catch_description = document.querySelector('#catch_description').value

      if(catch_title, catch_type, season, catch_description) {
            const response = await fetch('/api/createcatch', {
                  method: "POST",
                  // body successfully sent to api POST route
                  body: JSON.stringify({
                        catch_title,
                        catch_type,
                        season,
                        catch_description
                  }),
                  headers: ({ 'Content-Type': 'application/json' })
            })
                  .then(results => {
                        return results.json()
                  })
                  .catch(err => {
                        throw new Error(err)
                  })

            // works successfully once fetch request returns data the response is read as true which prompts page reload
            if(response) {
                  document.location.replace('/catchlog')
            } 
      }
}

searchBtn.addEventListener('click', createCatch)