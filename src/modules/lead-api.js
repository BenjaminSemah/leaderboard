async function setGame() {
  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/'
  const request = new Request(requestURL);

  const response = await fetch(request, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': 'Happy Devs'
    })
  })

  const gameID = await response.json();
  console.log(gameID);
}

setGame(); //Set a condition... If game doesn't exist, setGame
//Game ID: bpLwHtek8IZYib7x7AC3