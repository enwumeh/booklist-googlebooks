const prompt = require('prompt');

prompt.start();
console.log('Welcome! What would you like to search for?')

prompt.get(['option'], function (err, res) {
  if (res.option == 'find book') {
    //handle condition
  }
  else if (res.option == 'see list') {
    //handle condition
  }
  else if (err) {
    console.log("looks like this isn't one of the possible options!")
    return err;
  }
})