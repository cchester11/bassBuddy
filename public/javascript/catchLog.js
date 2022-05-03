const createDiv = document.createElement('div')
const createP = document.createElement('p')

async function renderAllCatches () {
      await fetch('/api/getallcatches', {
            method: "GET",
            headers: ({ 'Content-Type': 'application/json'})
      })
            .then(results => {
                  console.log(results)

            })
            .catch(err => {
                  if(err) {
                        throw new Error(err)
                  }
            })
}

renderAllCatches()