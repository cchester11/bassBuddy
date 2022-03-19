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

            // route works until this point. the response does not return as "ok"
            // however, the api route does save the catch to the db so i did away with an error callback for now to avoid the weird problem we have here
            if(response.ok) {
                  console.log(response + ' client side')
                  document.location.reload()
            } else {
                  document.location.reload()
                  console.log('dont forget about the errors')
            }
      }
}

searchBtn.addEventListener('click', createCatch)