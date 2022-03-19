//********************************************************
//SET UP

const btn = document.querySelector('#msg-btn');
const form = document.querySelector('#new-player-form');

const playersList = document.querySelector('table');

//BIND event listeners
btn.addEventListener('click', getMessage);
form.addEventListener('submit', submitPlayer)

// Fetch all Players as soon as app is loaded
getAllPlayers();

//**************************************************************** */

//PLAYERS FLOW

//index
function getAllPlayers(){
  fetch('http://localhost:3000/players')
        .then(r => r.json())
        .then(appendPlayers)
        .catch(console.warn)
}

//create
function submitPlayer(e) {
  e.preventDefault();

  const playerData ={
    name: e.target.name.value,
    age: e.target.age.value,
    salary: e.target.age.value
  };

  const options ={
    method: 'POST',
    body: JSON.stringify(playerData),
    headers: {"Content-Type": "application/json"}
  };

 fetch('http://localhost:3000/players', options)
        .then(r => r.json())
        .then(appendPlayer)
        .then(() => e.target.reset())
        .catch(console.warn)
};

//create
