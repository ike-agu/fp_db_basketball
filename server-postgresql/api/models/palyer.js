const db = require ('../dbConfig')

class BasketBallPlayer {
  constructor(data){
    this.id = data.id
    this.name = data.name
    this.age = data.age
  }

   static get all(){
     return new Promise (async (resolve, reject) => {
        try{
          const playersData = await db.query(`SELECT * FROM basketBallPlayers`)
          const players = playersData.rows.map(d => BasketBallPlayer(d) )
          resolve(players );
        } catch(err){
          reject('Error searching for players')
        }

     })
   }




}

module.exports = BasketBallPlayer
