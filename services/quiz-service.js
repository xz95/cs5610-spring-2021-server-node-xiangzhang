
let quizzes = require('./quizzes.json') // quizzes declared in separate file

const creatQuiz = () => {}

const findAllQuizzes = () => quizzes // retrieve all quizzes

const findQuizById = (quizId) => // retrieve specific quiz by its ID
    quizzes.find(quiz => quiz._id === quizId)

const updateQuiz = () => {}

const deleteQuiz = () => {}

// export functions for controller
module.exports = {
  creatQuiz,
  findAllQuizzes,
  findQuizById,
  updateQuiz,
  deleteQuiz
}






