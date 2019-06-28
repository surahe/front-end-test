const Mocha = require('mocha');

const mocha = new Mocha({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './docs/mochawesome-reporter',
  }
})

mocha.addFile('./tests/service/router.spec.js');
mocha.run(function (errlorLength) {
  if (errlorLength > 0) {
    console.log("error");
    process.exit(1);
  } else {
    console.log("done");
    process.exit();
  }
})