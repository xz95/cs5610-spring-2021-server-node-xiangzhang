const questionService
    = require("../services/questions/questions-service")

module.exports = (app) => {
  const findQuestionsForQuiz = (req, res) => {
    const quizId = req.params['qid']
    const questions
        = questionService.findQuestionsForQuiz(quizId)
    res.json(questions)
  }

  const findAllQuestions = (req, res) => {
    const questions = questionService.findAllQuestions()
    res.send(questions)
  }

  app.get("/api/quizzes/:qid/questions",
      findQuestionsForQuiz)

  app.get("/api/questions",
      findAllQuestions)
}
