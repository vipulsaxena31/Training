const {Client}  = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Demo',
    password: 'admin',
    port: 5432
})

client.connect()
.then(() => console.log('Connected Successful'))
.catch(err => console.log('Error:', err))
.finally(() => client.end())