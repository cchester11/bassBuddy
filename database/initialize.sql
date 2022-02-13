CREATE TABLE catches (
      id AUTO_INCREMENT INTEGER PRIMARY KEY NOT NULL,
      catch_title VARCHAR(10) NOT NULL,
      catch_type VARCHAR(15) NOT NULL,
      season VARCHAR(10) NOT NULL,
      catch_description VARCHAR(250) NOT NULL
);

INSERT INTO catches (
      catch_title, 
      catch_type, 
      season,
      catch_description
);

VALUES (
      'catch one',
      'large mouth',
      'spring',
      'catch was close to the bank. used a lunker log worm across the floor'
      )
      (
      'catch two',
      'large mouth',
      'winter',
      'catch was deep. used a deep lipped crankbait'
      )
      (
      'catch three',
      'large mouth',
      'summer',
      'fish was dug into a cut of weeds. Used a frog to invoke an aggressive bite'
      );