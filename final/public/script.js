var express = require('express')
var app = express()
var mysql = require('mysql')

var conn = mysql.createPool({
  connectionLimit: 50,
  host: 'localhost',
  user: 'testuser',
  password: '0808',
  database: 'reactApp'
})

app.get('/dbContent', function (req, resp) {
  conn.getConnection(function (error, tempCont) {
    if (!!error) {
      tempCont.release()
      console.log('Error')
    } else {
      console.log('Connected')
      tempCont.query("SELECT * FROM mydata", function (error, rows, field) {
        tempCont.release()
        if (!!error) {
          console.log('Error in query')
        } else {
          resp.json(rows)
        }
      })
    }
  })
})
app.listen(3000)
