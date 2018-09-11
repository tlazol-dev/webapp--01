
const devConfig = {
  client: 'pg',
  connection : {
    host: '127.0.0.1',
    port: '5432',
    user: 'dba_myapp',
    password: 'passpass',
    database : 'myapp'
  },

  migrations: {
    directory: './src/database/migrations'
  },

  seeds : {
    directory: './src/database/seeds'
  }

}

module.exports = {
  development: devConfig,
}
