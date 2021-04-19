const questions = require('./questions.json')
const questionsModel = require("../../models/questions/questions-model")
const questionsDao = require('../../daos/questions-dao')


// findQuestionsForQuiz = (quizId) =>
//     questions.filter(question => question.quizId === quizId)

// create common questions for all quizzes
const createQuestion = () => {}
// create common questions for a specific quiz
const createQuestionForQuiz = () => {}


const findAllQuestions = () => {
  // return questions
  //  return questionsModel.find()
  return questionsDao.findAllQuestions()
}

const findQuestionsForQuiz = (quizId) =>
    // questions.filter((question) => {
    //   return question.quizId === quizId
    // })
{
  // return questionsModel.find({quizId: quizId})
  return questionsDao.findQuestionsForQuiz(quizId)
}

const findQuestionById = (questionId) =>
    // questions.find((question) => {
    //   return question._Id === questionId
    // })
{
  //return questionsModel.findById(questionId)
  return questionsDao.findQuestionById(questionId)
}

const updateQuestion = () => {}
const deleteQuestion = () => {}


module.exports = {
  createQuestion,
  createQuestionForQuiz,
  findAllQuestions,
  findQuestionsForQuiz,
  findQuestionById,
  updateQuestion,
  deleteQuestion
}
