async function renderAllCatches () {
      await fetch('/api/getallcatches', {
            method: "GET",
            headers: ({ 'Content-Type': 'application/json'})
      })
            .then(response => response.json())
            .then(data => {
                  let fish = data.rows
                  
                  for(let i = 0; i < fish.length; i ++) {
                        console.log(fish[i])
                  }
            })
            .catch(err => {
                  if(err) {
                        throw new Error(err)
                  }
            })
}

renderAllCatches()