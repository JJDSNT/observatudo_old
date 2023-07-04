const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');
const path = require('path');

const db_path = path.join(process.cwd(), "src/app/database");
console.log(db_path);

async function openDb() {
  return sqlite.open({
    filename: `${db_path}/indicadores.sqlite`,
    driver: sqlite3.Database,
  });
}

async function setup() {
  const db = await openDb();
  await db.migrate(
                    { 
                      migrationsPath: `${db_path}/migrations`, //add cutom path to your migrations
                      force: 'last' 
                    }
                  );

  /*const people = await db.all('SELECT * FROM Person');
  console.log('all person', JSON.stringify(people, null, 2));

  const vehicle = await db.all(`SELECT a.*, b.* FROM Person as a
  LEFT JOIN Vehicle as b
  ON a.id = b.ownerId
  `);
  console.log('all vehicles', JSON.stringify(vehicle, null, 2));
  */
 console.log('done, talvez');
}

setup();