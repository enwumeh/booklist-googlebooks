const prompt = require('prompt');
const axios = require('axios');


prompt.start();
console.log('Welcome! What would you like to search for? Options are "books" and  "see list"')

prompt.get(['option'], function (err, res) {
  if (res.option == 'books') {
    getBooks()
    //handle condition
  }
  else if (res.option == 'see list') {
    viewBookList()
    //handle condition
  }
  else if (err) {
    console.log("looks like this isn't one of the possible options!")
    return err;
  }
})

const getBooks = async () => {
  try {

    prompt.get(['findBooks'], async function (err, res) {
      console.log('You are looking for ' + res.findBooks);

      const key = "AIzaSyDmYQmWIoPydQv0NzmBQTRS5G_w0wdNAis";
      let fields = 'items(id, volumeInfo(title,authors,publisher))'
  
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?",
        {
          params: {
            key: key,
            q: res.findBooks,
            maxResults: 5,
            fields: fields
            // orderBy: Relevance
          },
        }
      );
      const books = response.data.items

      books.map((book, idx) => {
        console.log(idx + 1);
        console.log("Title:", book.volumeInfo.title)
        console.log("Author: "+ book.volumeInfo.authors);
        console.log("Published by: "+book.volumeInfo.publisher);
        console.log("                ")
        console.log("                ")
      })

      console.log("select the book you want to save to your reading list (1-5)");
      prompt.get(['bookNumber'], async function (err, res) {

        let bookNumber = res.bookNumber;
        let booklist = []
        if (bookNumber <= 5) {
          let UserSelected = books[bookNumber];
          booklist.push(UserSelected);
          // console.log("book!!!",books)
          console.log("Your book of choice is:" + UserSelected);

        }
      })
    })
  } catch (err) {
    console.log(err);
    } 
  // console.log("resp:", books);
}

const viewBookList = () => {
  if (booklist.length <= 0) {
    console.log("Looks like there are no books in your reading list")
    getBooks()
  }
  else {
    booklist.map((entry, idx) => {
      console.log(idx+1, "Title: " + entry.title)
    })
  }

}
