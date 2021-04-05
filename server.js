const express = require('express') // avoid using ./express;
const app = express()

const demos = require('./controllers/demo-controller')
demos(app)

app.listen(3000)