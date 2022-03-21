DROP TABLE IF EXISTS users;

CREATE TABLE users(
  id serial PRIMARY KEY,
  username varchar(60) NOT NULL UNIQUE,
  email varchar(100) NOT NULL UNIQUE,
  password_digest varchar(100) NOT NULL
  );

DROP TABLE IF EXISTS basketBallPlayers;

CREATE TABLE basketBallPlayers(
  id serial PRIMARY KEY,
  name varchar(50) NOT NULL,
  age int NOT NULL,
  salary int,
  team_id int
);

DROP TABLE IF EXISTS teams;

CREATE TABLE teams(
  id serial PRIMARY KEY,
  teamName varchar(50) NOT NULL,
  countryName varchar(50) NOT NULL
);
