const run = require('./app/app');
const AlertService = require('./app/alert.service');
const CalculatorService = require('./app/calculator.service');
const JokesService = require('./app/jokes.service');

const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();

run(alertService, calculatorService, jokesService);