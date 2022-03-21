//********************************************************
//SET UP

const btn = document.querySelector('#msg-btn');
const form = document.querySelector('#new-player-form');

const playersList = document.querySelector('table');

//BIND event listeners
btn.addEventListener('click', getMessage);
form.addEventListener('submit', submitPlayer);

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
    salary: e.target.salary.value
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

//UPDATE PLAYERS

function updateDog(id, tr){
  const options = {
    method: 'PATCH',
  };

  fetch(`http://localhost:3000/players/${id}`, options)
        .then(r => r.json())
        .then(data => {
            const { player } = data
            tr.querySelectorAll('td')[1].textContent = player.age
        })
        .catch(console.warn)

}

//DELETE PLAYERS
function deletePlayer(id, li){
    console.log('deleting', id)
    const options = {
        method: 'DELETE',
    };
    fetch(`http://localhost:3000/dogs/${id}`, options)
        .then(li.remove())
        .catch(console.warn)
}

// helpers
function appendPlayers(data){
    data.players.forEach(appendPlayer);
};

function appendPlayer(playerData){
    const newRow = document.createElement('tr');
    const playerLi = formatPLayerTr(playerData, newRow)
    playersList.append(newRow);
};


function formatPLayerTr(player,tr){
  const nameTd = document.createElement('td');
  const ageTd = document.createElement('td');
  const salaryTd = document.createElement('td');
  const deleteTd = document.createElement('td');
  const updateTd = document.createElement('td');

  const delBtn = document.createElement('button');
  const uptBtn = document.createElement('button')
  delBtn.setAttribute('class', 'delete')
  uptBtn.setAttribute('class', 'update')
  delBtn.textContent = 'Del';
  uptBtn.textContent = 'Add';

  delBtn.onclick = () => deletePlayer(player.id, tr);
  uptBtn.onclick = () => updatePlayer(player.id, tr);

  deleteTd.append(delBtn);
  updateTd.append(uptBtn);

  nameTd.textContext= player.name
  ageTd.textContent = player.age
  salaryTd.textContent = player.salary

  tr.append(nameTd)
  tr.append(ageTd)
  tr.append(salaryTd)
  tr.append(deleteTd)
  tr.append(updateTd)

  return tr;
}

//****************************************************************** */

//MESSAGE FLOW
function getMessage(){
    fetch('http://localhost:3000')
        .then(r => r.text())
        .then(renderMessage)
        .catch(console.warn)
};

function renderMessage(msgText){
    document.querySelector('#msg-btn').textContent = msgText;
};
