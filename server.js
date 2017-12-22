const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      app = express(),
      port = process.env.PORT || 5000

app.use(require('morgan')('dev'))
app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.use((err, req, res, next) => {
  console.log(err.message)
  res.sendStatus(500)
})

app.listen(port, () => console.log(`listening on port ${port}`))
