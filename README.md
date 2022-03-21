# Basketball Man

## What is basketball Man
- basketball Man is a website where users can view names of basket ball players,   their age, annual salary, teams  and country of origin .

## Setup
***
### Installation
- clone repo
- Navigate to the ```fp_db_basketball/client``` folder
  - In the terminal run ```npm install``` to install dependencies

- Navigate to the ```fp_db_basketball/ server-postgresql``` folder
  - In the terminal run ```npm install``` to install dependencies

### Usage
- Navigate the terminal to the server folder and run ```docker compose up``` to start the server from port 3000. From there you can access the server on ```http://localhost:3000/```

#### API endpoints available
Currently there are 3 unique endpoints
- **'/users'** - *Creates new users*
- **'/players'** - *Returns all of the players*
- **'/teams'** - *Returns all of the player's teams*
