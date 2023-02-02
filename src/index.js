const cors = require('cors')
const express = require('express')
const app = express()
let users = require('./data/users.json')

app.use(express.json())
app.use(cors())

app.get('/users', (req, res) => {
  return res.status(200).json(users)
})

app.post('/users', (req, res) => {
  users.push({ ...req.body.user })
  return res.status(201).json(users)
})

app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id)
  const user = users.find(user => user.id === userId)
  if (!user) { return res.status(404).json({ error: 'User not found' }) }

  const updatedUsers = users.map(user => {
    if (user.id === userId) {
      user = req.body.user
    }
    return user
  })
  users = updatedUsers

  return res.status(200).json(users)
})

app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id)
  const user = users.find(user => user.id === userId)
  if (!user) { return res.status(404).json({ error: 'User not found' }) }

  users = users.filter(user => user.id !== userId)
  return res.status(204).send()
})

app.listen(3000, () => console.log('http://localhost:3000'))