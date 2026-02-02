// server.js
const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const app = express()
app.use(cors())
app.use(express.json())

// Secret key for JWT (you can change it)
const JWT_SECRET = 'your_jwt_secret_key'

// Connect to MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',          // your MySQL username
  password: '',          // your MySQL password
  database: 'user_auth_db'
})

db.connect(err => {
  if (err) return console.log('DB connection error:', err)
  console.log('Database connected ✅')
})

// Create table if not exists
db.query(`
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  email VARCHAR(255),
  password VARCHAR(255)
)
`, (err) => {
  if (err) console.log('Error creating table:', err)
})

// Registration API
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body
  if (!username || !email || !password) {
    return res.status(400).json({ msg: 'Please provide all fields' })
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    db.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword],
      (err) => {
        if (err) {
          if (err.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ msg: 'Username already exists' })
          } else {
            return res.status(500).json({ msg: 'Database error', error: err })
          }
        }
        res.json({ msg: 'Registration successful' })
      }
    )
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message })
  }
})

// Login API
app.post('/login', (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    return res.status(400).json({ msg: 'Please provide all fields' })
  }

  db.query(
    'SELECT * FROM users WHERE username = ?',
    [username],
    async (err, result) => {
      if (err) return res.status(500).json({ msg: 'Database error', error: err })
      if (result.length === 0) return res.status(400).json({ msg: 'User not found' })

      const isMatch = await bcrypt.compare(password, result[0].password)
      if (!isMatch) return res.status(400).json({ msg: 'Wrong password' })

      // Create JWT token
      const token = jwt.sign(
        { id: result[0].id, username: result[0].username },
        JWT_SECRET,
        { expiresIn: '1h' }
      )

      res.json({
        msg: 'Login successful',
        token,
        user: {
          id: result[0].id,
          username: result[0].username,
          email: result[0].email
        }
      })
    }
  )
})

// Example protected route
app.get('/profile', (req, res) => {
  const authHeader = req.headers.authorization
  if (!authHeader) return res.status(401).json({ msg: 'No token provided' })

  const token = authHeader.split(' ')[1]
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ msg: 'Invalid token' })
    res.json({ msg: 'Protected data', user })
  })
})

// Start server
app.listen(3000, () => console.log('Server running on port 3000'))
