const questionService
    = require("../services/questions/questions-service")

module.exports = (app) => {

  const findQuestionsForQuiz = (req, res) => {
     const quizId = req.params['qid']
    // const questions
    //     = questionService.findQuestionsForQuiz(quizId)
    // res.json(questions)
    questionService.findQuestionsForQuiz(quizId)
      .then((questions) => {
        res.send(questions)
      })
  }

  const findAllQuestions = (req, res) => {
    // const questions = questionService.findAllQuestions()
    // res.send(questions)

    questionService.findAllQuestions()
      .then((questions) => {
        res.send(questions)
      })
  }


  const findQuestionById = (req, res) => {
    const questionId = req.params['qid']
    questionService.findQuestionById(questionId)
        .then((question) => {
          res.send(question)
    })
  }


  app.get("/api/quizzes/:qid/questions",
      findQuestionsForQuiz)

  app.get("/api/questions",
      findAllQuestions)

  app.get("/api/questions/:qid",
      findQuestionById)
}
