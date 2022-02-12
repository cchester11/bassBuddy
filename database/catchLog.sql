DROP DATABASE IF EXISTS catchLog_db;

CREATE DATABASE catchLog_db;

USE catchLog_db;

CREATE TABLE catches (
      id AUTO_INCREMENT INTEGER PRIMARY KEY
      NOT NULL,
      catch_title VARCHAR(10) NOT NULL,
      catch_type VARCHAR(15) NOT NULL,
      season VARCHAR(10) NOT NULL,
      catch_description VARCHAR(250) NOT NULL
)