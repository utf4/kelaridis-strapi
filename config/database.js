module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});


// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: "mysql",
//         host: env("DATABASE_HOST", "127.0.0.1"),
//         port: env.int("DATABASE_PORT", 8080),
//         database: env("DATABASE_NAME", "kelaridis"),
//         // username: env("DATABASE_USERNAME", "root"),
//         // password: env("DATABASE_PASSWORD", ""),
//         // ssl: env.bool("DATABASE_SSL", false)
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });