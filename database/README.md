# Athlete Database

--------------------------------------------------------------------------------

## Design

2018 Asian Games Athlete Information

---

### Athletes

- id: Number | INT
- name: String | VARCHAR
- gender: String | VARCHAR (m/f/o)
- birthdate: Date | DATE (dd/mm/yyyy)
- age: Number | INT (year)
- height: Number | INT (cm)
- weight: Number | INT (kg)
- nationality: String | VARCHAR
- sports: Array of [Sport]

### Sports

- id: Number | INT
- branch: String (Archery / Boxing / Running / Cycling) | VARCHAR
- category: String (Air / Endurance / Goal / Table / Strength) | VARCHAR
- origin: String | VARCHAR
- description: String | TEXT

---

### Sample

**Athletes**

| id | idn | name | gender | birthdate | age | height | weight | nationality | sports
|----|-----|------|--------|-----------|-----|--------|--------|-------------|-------
| 1  | 3276012305930001 | Haidar | m | 23/5/1993 | 24 | 180 | 70 | Indonesia | Coding
| 2  | 3215131306940004 | Dono   | m | 13/6/1994 | 23 | 168 | 55 | Indonesia | Running
| 3  | 3301211106880003 | Albert | m | 11/6/1988 | 29 | 172 | 110 | Indonesia | Fishing
| 4  | 3172015208870004 | Angel  | f | 1/8/1987  | 30 | 167 | 54 | Indonesia | Hiking
| 5  | 3374102105950001 | Feri   | m | 21/5/1995 | 22 | 178 | 75 | Indonesia | Jujitsu
| 6  | 317305300993006  | Fikri  | m | 30/9/1993 | 24 | 158 | 67 | Indonesia | Badminton
| 7  | 3519080508950001 | Mifta  | m | 5/8/1995  | 22 | 165 | 56 | Indonesia | Football
| 8  | 3174040408890008 | Fahri  | m | 4/8/1989  | 28 | 170 | 69 | Indonesia | Chess Boxing
| 9  | 3173059049344007 | Haekal | m | 19/4/1993 | 24 | 178 | 90 | Indonesia | Carrom
| 10  | 3273260211950002 | Dzaky  | m | 2/11/1995 | 22 | 167 | 48 | Indonesia | Gebuk Bantal
| 11 | 3272046807830001 | Nina   | o | 28/7/1983 | 34 | 150 | 45 | Indonesia | Running
| 12 |3374101902870001  | Oliver | o | 19/2/1958 | 60 | 129 | 129 | Indonesia | Basketball

**Sports**

| id | branch | category | origin | description
|----|--------|----------|--------|------------
| Coding | Mind | USA | Mental sport that assigning code to something for the purposes of classification or identification, mostly creating software or application
| Running | Physical | Greece | Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot
| Fishing | Fishing | Pacific Ocean | Getting fish from the water
| Hiking | Endurance | United States | Long, vigorous walk, usually on trails (footpaths), in the countryside
| Jujitsu | Martial Arts | Japan | Japanese martial art and a method of close combat for defeating an armed and armored opponent in which one uses no weapon or only a short weapon.
| Badminton | Net | England | Racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams, the most common forms of the game are "singles" (with one player per side) and "doubles" (with two players per side).The game developed in British India from the earlier game of battledore and shuttlecock. European play came to be dominated by Denmark but the game has became very popular in Asia, with recent competitions dominated by China
| Football | Physical | England | Football is a family of team sports that involve, to varying degrees, kicking a ball with a foot to score a goal
| Chess Boxing | Miscellaneous | Netherland | Chess boxing, or chessboxing, is a hybrid fighting sport (or a hybrid board game) that combines two traditional pastimes: chess, a cerebral board game, and boxing, a physical sport.
| Carrom | Semi-Shooting | India | Carrom is a "strike-and- pocket " tabletop game 
| Gebuk Bantal | Semi-Wrestling | Indonesia | Gebuk Bantal is a kind of fight sport on a bamboo above pool arena.
| Running | Endurance | Europe | Running is a type of gait characterized by an aerial phase in which all feet are above the ground
| Basketball | Goal | United States | Limited-contact sport played on a rectangular court. While most often played as a team sport with five players on each side, three-on-three, two-on-two, and one-on-one competitions are also common

--------------------------------------------------------------------------------

## Relational

...

--------------------------------------------------------------------------------

## Non-Relational

...

