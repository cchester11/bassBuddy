DROP DATABASE IF EXISTS catchLog_db;

CREATE DATABASE catchLog_db;

CREATE TABLE catchlog (
      id INTEGER AUTO_INCREMENT PRIMARY KEY,
      catch_location VARCHAR(30) NOT NULL,
      catch_species VARCHAR(30) NOT NULL,
      season VARCHAR(30) NOT NULL,
      catch_description VARCHAR(1000) NOT NULL,
      favorite BOOLEAN NOT NULL DEFAULT 0,
      catch_date DATE NOT NULL
);

INSERT INTO catchlog (catch_location, catch_species, season, catch_description, catch_date);

VALUES (
      'Matagorda Bay',
      'Black Drum',
      'Spring',
      'Shallow Depth , Late Night--about 9pm , Bait: Shrimp , Tackle: 3oz weight on medium salt water rod , Weighed about 40 pounds',
      '03/09/2022'
),
(
      'Mueller',
      'Large Mouth',
      'Spring',
      'Caught in an inlet, about 5 foot depth , bait: White swim bait , method: slow tug along the bottom , bite: bite was slightly aggressive at the crest of a drop off , Weight: about 5 to 6 pounds'
      '05/22/2020'
), 
(
      'Farm Pond Somewhere in Texas',
      'Large Mouth',
      'Summer',
      'Caught off a shallow and wide bank , bait: a yellow and blue spinnerbait , method: slow reel in with little finesse , bite: bite was lazy and engulfing. the fish was huge, probably just looking for a snack , weight: about 9 to 10 pounds',
      '07/15/2019'
);