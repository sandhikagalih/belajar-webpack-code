const run = require('./app/app');
const AlertService = require('./app/alert.service');
const CalculatorService = require('./app/calculator.service');
const JokesService = require('./app/jokes.service');

run(alertService, calculatorService, jokesService);
