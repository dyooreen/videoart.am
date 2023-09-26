module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'database'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'sot'),
        username: env('DATABASE_USERNAME', 'admin'),
        password: env('DATABASE_PASSWORD', 'Sc3Rqk7c8H8A'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
