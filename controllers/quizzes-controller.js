// require service
const quizService = require('../services/quizzes/quiz-service')

// accept app, express instance
module.exports = (app) => {
  // use service to retrieve all
  const findAllQuizzes = (req, res) =>
      res.send(quizService.findAllQuizzes())

  const findQuizById = (req, res) => {
    const quizId = req.params['qid']
    const quiz = quizService.findQuizById(quizId)
    res.json(quiz)
  }

  app.get('/api/quizzes', findAllQuizzes)
  app.get('/api/quizzes/:qid', findQuizById)
}





