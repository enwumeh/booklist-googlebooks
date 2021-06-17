const prompt = require('prompt');

prompt.start();

prompt.get(['option'], function (err, res) {
  if (err) {
    return err;
  }
  console.log(res.option)
})