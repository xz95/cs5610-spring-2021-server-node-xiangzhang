
//const quizzes = require('./quizzes.json') // quizzes declared in separate file

const quizzesModel = require("../../models/quizzes/quizzes-model")

const creatQuiz = () => {}

const findAllQuizzes = () => {
  // return quizzes
  return quizzesModel.find()
} // retrieve all quizzes

const findQuizById = (quizId) => // retrieve specific quiz by its ID
    // quizzes.find(quiz => quiz._id === quizId)
{
  return quizzesModel
          .findById(quizId)
          .populate("questions")
          .exec()
}

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






