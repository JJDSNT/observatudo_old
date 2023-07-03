/*const sqlite = require('sqlite');

async function setup() {
    const db = await sqlite.open('./mydb.sqlite');
    await db.migrate({force: 'last'});

    const people = await db.all('SELECT * FROM person');
    console.log('ALL PEOPLE', JSON.stringify(people, null, 2));

    const vehicles = await db.all('SELECT * FROM vehicle');
    console.log('ALL VEHICLES', JSON.stringify(vehicles, null, 2));
}

setup();
*/
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

async function openDb() {
  return sqlite.open({
    filename: './database.db',
    driver: sqlite3.Database,
  });
}

async function setup() {
  const db = await openDb();
  await db.migrate(
                    { 
                      migrationsPath: './migrations', //add cutom path to your migrations
                      force: 'last' 
                    }
                  );

  const people = await db.all('SELECT * FROM Person');
  console.log('all person', JSON.stringify(people, null, 2));

  const vehicle = await db.all(`SELECT a.*, b.* FROM Person as a
  LEFT JOIN Vehicle as b
  ON a.id = b.ownerId
  `);
  console.log('all vehicles', JSON.stringify(vehicle, null, 2));
}

setup();