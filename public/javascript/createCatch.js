const searchBtn = document.querySelector('#searchBtn')

// async function properly sends data to the back end route
async function createCatch (event) {
      event.preventDefault()

      // values are successfully extracted using below variables
      const catch_location = document.querySelector('#location').value
      const catch_species = document.querySelector('#species').value
      const season = document.querySelector('#season').value
      const catch_description = document.querySelector('#conditions').value
      const catch_date = document.querySelector('#date').value

      if(catch_location, catch_species, season, catch_description, catch_date) {
            const response = await fetch('/api/createcatch', {
                  method: "POST",
                  // body successfully sent to api POST route
                  body: JSON.stringify({
                        catch_location,
                        catch_species,
                        season,
                        catch_description,
                        catch_date
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