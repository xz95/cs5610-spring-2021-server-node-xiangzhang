

module.exports = (app) => {

  const add = (request, response) => {
    const a = request.params['paramA'];
    const b = request.params['paramB'];
    response.send(a + b);
  }

  const subtract = (request, response) => {
    const a = request.query['x'];
    const b = request.query['y'];
    const c = parseInt(a) - parseInt(b)
    response.send(`${c}`);
  }


  app.get('/add/:paramA/:paramB', add)
  app.get('/subtract', subtract)

  app.get('/can/be/anything', function (req, res) {
    res.send('Hello World')
  })
}

