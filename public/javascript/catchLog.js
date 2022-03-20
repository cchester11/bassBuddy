const createDiv = document.createElement('div')
const createP = document.createElement('p')

async function renderAllCatches () {
      const response = await fetch('/api/getallcatches', {
            method: "GET",
            headers: ({ 'Content-Type': 'application/json'})
      })
            .then(results => {
                  console.log(results)
            })
            .then(data => {
                  console.log(data)
            })
            .catch(err => {
                  throw new Error(err)
            })

      if(response) {
            console.log(response)
      } else {
            return Error()
      }
}

renderAllCatches()