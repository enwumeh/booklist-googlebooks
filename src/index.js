const prompt = require('prompt');
const axios = require('axios');


prompt.start();
console.log('Welcome! What would you like to search for?')

prompt.get(['option'], function (err, res) {
  if (res.option == 'find book') {
    getBooks()
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

const getBooks = async () => {

  try {
    const key = "AIzaSyDmYQmWIoPydQv0NzmBQTRS5G_w0wdNAis";
    let fields = 'items(id, volumeInfo(title,authors,publisher))'

    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?",
      {
        params: {
          key: key,
          q: "re",
          maxResults: 5,
          fields: fields
          // orderBy: Relevance
        },
      }
    );
    const books = response.data.items
  console.log(books)
  // console.log("resp:", books);
  } catch (err) {
  console.log(err);
  }
  
}
