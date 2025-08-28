const { db } = require('./database')

async function main () {
  await db.initialize()

  // Inserindo dados
  await db.model('primary', 'User').create({
    name: 'Rodrigo Ribeiro',
    email: 'rodrigo@example.com'
  })

  await db.model('secondary', 'Report').create({
    title: 'Primeiro relatório',
    content: 'Conteúdo do relatório...'
  })

  // Consultando dados
  const users = await db.model('primary', 'User').find()
  const reports = await db.model('secondary', 'Report').find()

  console.log('Users:', users)
  console.log('Reports:', reports)

  process.exit(0)
}

main()
