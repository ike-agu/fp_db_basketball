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
    return new promise (async (resolve, reject) => {
      try {
        let onePlayer = await db.query(`SELECT * FROM basketBallPlayers WHERE id = $1;`, [id]);
        let player = new BasketBallPlayer(onePlayer.rows[0]);
        resolve(player);
      } catch (err) {
        reject('Player not found')
      }
    });
  }



}

module.exports = BasketBallPlayer;
