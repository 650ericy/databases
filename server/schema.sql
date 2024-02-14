CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  messageID int PRIMARY KEY NOT NULL,
  message text NOT NULL,
  userID int NOT NULL,
  roomID int NOT NULL

);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  /* Describe your table here.*/
  id int PRIMARY KEY NOT NULL,
  username varchar(15) NOT NULL
);

CREATE TABLE rooms (
  /* Describe your table here.*/
  id int PRIMARY KEY NOT NULL,
  roomName varchar(15) NOT NULL

);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

