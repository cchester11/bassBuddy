const createDiv = document.createElement('div')
const createP = document.createElement('p')

async function renderAllCatches () {
      await fetch('/api/getallcatches', {
            method: "GET",
            headers: ({ 'Content-Type': 'application/json'})
      })
            .then(response => response.json())
            .then(data => console.log(data.rows))
            .catch(err => {
                  if(err) {
                        throw new Error(err)
                  }
            })
}

renderAllCatches()