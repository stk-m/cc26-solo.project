require('dotenv').config();
require("dotenv").config({
  path: "./.env.local",
});
const pg = require("pg");

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    staging: {
    client: 'postgresql',
    connection: {
      database: 'solo_pj',
      user:     'username',
      password: 'password'
      },
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: { 
      directory: "./db/seeds" 
    },
  },
  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
      // ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: "./db/migrations",
    },
    seeds: { directory: "./db/seeds" },
  },
};


// // Update with your config settings.

// /**
//  * @type { Object.<string, import("knex").Knex.Config> }
//  */
// module.exports = {

//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './dev.sqlite3'
//     }
//   },

//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },

//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }

// };
