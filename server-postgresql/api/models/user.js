const db = require ('../dbConfig');
// const SQL = require('sql-template-strings');//allow you to use ES6 tagged template strings for prepared/escaped statements.

class User{
  constructor(data){
    this.username = data.username
    this.email = data.email
    this.password_digest = data.password_digest
  }

  static get all(){
    return new Promise(async (res,rej) => {
      try{
        let result = await db.query(`SELECT * FROM users;`)
        let users = result.rows.map(r => new User(r))
        res(users)
      }catch (err) {
        rej(`Error retrieving users: ${err}`)
      }
    })
  }

  static create( username, email, password ){
        return new Promise(async (res, rej) => {
            try {
                let result = await db.query(`INSERT INTO users (username, email , password_digest) VALUES ($1, $2, $3) RETURNING *;`, [username, email, password]);
                let user = new User(result.rows[0]);
                res(user)
            } catch (err) {
                rej(`Error creating user: ${err}`)
            }
        })
    }

}

module.exports = User
