const questions = require('./questions.json')


// findQuestionsForQuiz = (quizId) =>
//     questions.filter(question => question.quizId === quizId)

// create common questions for all quizzes
const createQuestion = () => {}
// create common questions for a specific quiz
const createQuestionForQuiz = () => {}


const findAllQuestions = () => {
  return questions
}

const findQuestionsForQuiz = (quizId) =>
    questions.filter((question) => {
      return question.quizId === quizId
    })

const findQuestionById = (questionId) =>
    questions.find((question) => {
      return question._Id === questionId
    })

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
