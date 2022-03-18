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

   static findByTeam (id) {
        return new Promise (async (resolve, reject) => {
            try {
                let playersData = await db.query(`SELECT * FROM basketBallPlayers WHERE teamId = $1;`, [ id ]);
                const players = playersData.rows.map(d => new BasketBallPlayer(d))
                resolve (players);
            } catch (err) {
                reject('Error retrieving player\'s teams');
            }
        });
    }





  static create (name, age , salary){
    return new Promise(async (resolve, reject) => {
      try{
        let playerData = await db.query(`INSERT INTO basketBallPlayers (name, age, salary) VALUES ($1, $2, $3) RETURNING *;`, [name,age,salary]);
        let newPlayer = new BasketBallPlayer(playerData.rows[0]);
        resolve(newPlayer)
      } catch (err) {
        reject('Error creating new player')
      }
    })
  }

  update(){
    return new Promise (async (resolve, reject) => {
      try{
        let updatePlayerData = await db.query(`UPDATE basketBallPlayers SET age = age + 1 WHERE id = $1 RETURNING *;`, [this.id]);
        let updatePlayer = new BasketBallPlayer(updatePlayerData.rows[0]);
          resolve (updatePlayer)
      } catch (err) {
        reject('Error updating dog')
      }
    });
  }


  destroy(){
    return new Promise(async(resolve, reject) => {
      try{
        await db.query(`DELETE FROM basketBallPlayers WHERE id = $1;`, [this.id]);
        resolve('Player has been deleted with success'  )
      }catch (err){
        reject ('Player could not be deleted')
      }
    })
  }

}


module.exports = BasketBallPlayer;
