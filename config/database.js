// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'ec2-52-3-60-53.compute-1.amazonaws.com'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'd1ipu3pbvojas1'),
//       user: env('DATABASE_USERNAME', 'myxewqicdpqjuj'),
//       password: env('DATABASE_PASSWORD', 'b87552e58f8b612161bdb5b318b2c057c0279c8e136115da30dcbc3b7926276e'),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });
const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));
  return {
    connection: {
      client: 'postgres',
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  }
};
