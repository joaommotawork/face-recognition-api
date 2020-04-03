const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors')
const knex = require('knex')

const register = require('./controllers/register')
const signIn = require('./controllers/signIn')
const profile = require('./controllers/profile')
const image = require('./controllers/image')

const db = knex({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: true
    }
})

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json('It Is Working')
})

app.post('/signIn', signIn.handleSignIn(db, bcrypt))

app.post('/register', register.handleRegister(db, bcrypt))

app.get('/profile/:id', profile.handleProfile(db))

app.put('/image', image.handleImage(db))

app.post('/imageURL', image.handleApiCall())

app.listen(process.env.PORT || 3001, () => {
    console.log(`App Running on Port ${process.env.PORT}`)
})
