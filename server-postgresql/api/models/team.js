const db = require ('../dbConfig')

const Player = require('./player')

class Team {
  constructor(data){
    this.id = data.id
    this.teamName = data.teamName
    this.countryName = data.countryName
  };

  static findById(id){
    return new Promise (async (resolve, reject) => {
      try{
        let teamData = await db.query(`SELECT * FROM teams WHERE id =  $1;`, [id]);
        let playerTeam = new Team (teamData.rows[0]);
        resolve(playerTeam)

      } catch (err){
        reject('Team not found')
      }
    });
  }

  get players(){
    return new Promise (async(resolve, reject) => {
        try{
          const allPlayers = await db.query(`SELECT * FROM basketBallPlayers; WHERE team_id = $1;`, [this.id]);
          const players = allPlayers.rows.map( d => new Player(d));
          resolves(players)
        }catch (err){
          reject(" Player's team could not be found")
        }
    });
  }


}
