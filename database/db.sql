DROP DATABASE IF EXISTS catchLog_db

CREATE DATABASE catchLog_db

CREATE TABLE catchlog (
      id INTEGER AUTO_INCREMENT PRIMARY KEY,
      catch_title VARCHAR(30) NOT NULL,
      catch_type VARCHAR(30) NOT NULL,
      season VARCHAR(30) NOT NULL,
      catch_description VARCHAR(250) NOT NULL
)

INSERT INTO catchlog (catch_title, catch_type, season, catch_description) 

VALUES (
      'catch two',
      'large mouth',
      'winter',
      'catch was deep. used a deep lipped crankbait'
      ),
      (
      'catch one',
      'large mouth',
      'spring',
      'catch was close to the bank. used a lunker log worm across the floor'
      ),
      (
      'catch three',
      'large mouth',
      'summer',
      'fish was dug into a cut of weeds. Used a frog to invoke an aggressive bite'
      );