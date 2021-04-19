
//const quizzes = require('./quizzes.json') // quizzes declared in separate file

const quizzesModel = require("../../models/quizzes/quizzes-model")
const quizzesDao = require("../../daos/quizzes-dao")
const creatQuiz = () => {}

const findAllQuizzes = () => {
  // return quizzes
  // return quizzesModel.find()
  return quizzesDao.findAllQuizzes()
} // retrieve all quizzes


const findQuizById = (quizId) => // retrieve specific quiz by its ID
    // quizzes.find(quiz => quiz._id === quizId)
{
  // return quizzesModel
  //         .findById(quizId)
  //         .populate("questions")
  //         .exec()
  return quizzesDao.findQuizById(quizId)
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






