const express = require('express') // avoid using ./express;
const bodyParser = require('body-parser');
const app = express()
const uri = process.env.MONGODB_URI;

app.use(bodyParser.json())

const mongoose = require('mongoose');
mongoose.connect(uri,
    {useNewUrlParser: true, useUnifiedTopology: true});


app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
      'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods',
      'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});

// for demo purpose; can be commented
const demos = require('./controllers/demo-controller')
demos(app)

// const quizzesController = require("./controllers/quizzes-controller")
// quizzesController(app)

require("./controllers/quizzes-controller")(app)
require("./controllers/questions-controller")(app)
require("./controllers/quiz-attempts-controller")(app)

app.listen(process.env.PORT || 3000)