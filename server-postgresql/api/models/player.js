const db = require ('../dbConfig')

class BasketBallPlayer {
  constructor(data){
    this.id = data.id
    this.name = data.name
    this.age = data.age
  }

  static get all() {
     return new Promise (async (resolve, reject) => {
        try {
            const allPlayers = await db.query(`SELECT * FROM basketBallPlayers;`)
            const players = allPlayers.rows.map(d => new BasketBallPlayer(d) )
            resolve(players );
        } catch(err) {
            reject('Error no players found')
        }
    });
  }

  static findById(id) {
    return new Promise (async (resolve, reject) => {
      try {
        let onePlayer = await db.query(`SELECT * FROM basketBallPlayers WHERE id = $1;`, [id]);
        let player = new BasketBallPlayer(onePlayer.rows[0]);
        resolve(player);
      } catch (err) {
        reject('Player not found')
      }
    });
  }

  static create (name, age , salary){
    return new Promise(async (resolve, reject) => {
      try{
        let playerData = await db.query(`INSERT INTO dogs (name, age, salary) VALUES ($1, $2) RETURNING *;`, [name,age,salary]);
        let newPlayer = new BasketBallPlayer(playerData.rows[0]);
        resolve(newPlayer)
      } catch (err) {
        reject('Error creating new player')
      }
    })
  }



}

module.exports = BasketBallPlayer;
