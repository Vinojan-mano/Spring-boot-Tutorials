const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}))

// Server code 

app.listen(3000)