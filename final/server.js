const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express()

const SELECT_ALL_DEADLINES_QUERY = 'SELECT id, action, date_format(date, \'%Y/%m/%d %h:%i\') date FROM deadlines'
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'testuser',
  password: '0808',
  database: 'reactApp'
})

connection.connect(err => {
  if (err) {
    return err
  }
})

app.use(cors())

app.get('/', (req, res) => {
  res.send('go to /deadlines')
})

app.get('/deadlines/add', (req, res) => {
  const { action, deadline } = req.query
  const INSERT_DEADLINE_QUERY = `INSERT INTO deadlines (action, date) VALUES ('${action}', '${deadline}')`
  connection.query(INSERT_DEADLINE_QUERY, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.send('successfully upload')
    }
  })
})

app.get('/deadlines', (req, res) => {
  connection.query(SELECT_ALL_DEADLINES_QUERY, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results
      })
    }
  })
})

app.listen(8081, () => {
  console.log('Products server listening on port 8081')
})

