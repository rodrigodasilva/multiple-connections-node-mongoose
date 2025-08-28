const mongoose = require('mongoose')
const { UserSchema } = require('./models/User')
const { ReportSchema } = require('./models/Report')

const config = {
  primary: {
    mongoUrl: process.env.MONGO_URL_PRIMARY,
    schemas: [
      { name: 'User', schema: UserSchema, collection: 'users' }
    ]
  },
  secondary: {
    mongoUrl: process.env.MONGO_URL_SECONDARY,
    schemas: [
      { name: 'Report', schema: ReportSchema, collection: 'reports' }
    ]
  }
}

class Database {
  isInitialized = false
  connections = {}

  async initialize () {
    if (this.isInitialized) return

    for (const [alias, { mongoUrl, schemas }] of Object.entries(config)) {
      const connection = await mongoose.createConnection(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })

      for (const { name, schema, collection } of schemas) {
        connection.model(name, schema, collection)
      }

      connection.on('connected', () => {
        console.log(`Connected to ${alias}`)
      })

      connection.on('error', (err) => {
        console.error(`Error on ${alias}`, err)
      })

      this.connections[alias] = connection
    }

    this.isInitialized = true
  }

  model (alias, name) {
    const conn = this.connections[alias]
    if (!conn) {
      throw new Error(`Connection "${alias}" not found`)
    }
    return conn.model(name)
  }
}

const db = new Database()
module.exports = { db }
