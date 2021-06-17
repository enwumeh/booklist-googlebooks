const prompt = require('prompt');
const axios = require('axios');


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


try {
  const response = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?",
    {
      params: {
        key: key,
        q: bookQuery,
        maxResults: 5,
        fields: fields
        // orderBy: Relevance
      },
    }
  );
  const books = response.data.items
console.lolg(books)
// console.log("resp:", books);
} catch (err) {
console.log(err);
}
