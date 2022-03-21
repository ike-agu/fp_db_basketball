<<<<<<< HEAD
const db = require ('../dbConfig');
const SQL = require('sql-template-strings');//allow you to use ES6 tagged template strings for prepared/escaped statements.

class User{
  constructor(data){
    this.username = data.username
    this.email = data.email
    this.passwordDigest = data.password_digest
  }

  static get all(){
    return new Promise(async (res,reject) => {
      try{
        let result = await db.run(SQL`SELECT * FROM users;`)
        let users = result.rows.map(r => new User(r))
        res(users)
      }catch (err) {
        reject(`Error retrieving users: ${err}`)
      }
    })
  }

=======
const db = require('../db_config/config');
const SQL = require('sql-template-strings');

class User {
    constructor(data){
        this.username = data.username
        this.email = data.email
        this.passwordDigest = data.password_digest
    }

        static get all(){
        return new Promise(async (res, rej) => {
            try {
                let result = await db.run(SQL`SELECT * FROM users;`);
                let users = result.rows.map(r => new User(r))
                res(users)
            } catch (err) {
                rej(`Error retrieving users: ${err}`)
            }
        })
    }
>>>>>>> d5e5795 (added model for user and method to get all)

}
