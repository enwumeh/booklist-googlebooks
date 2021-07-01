const prompt = require("prompt");
const axios = require("axios");

const main = () => {
  prompt.start();
  console.log(
    '! What would you like to search for? Options are "books" and  "see list"'
  );

  prompt.get(["option"], function (err, res) {
    if (res.option == "books") {
      getBooks();
      //handle condition
    } else if (res.option == "see list") {
      viewBookList();
      //handle condition
    } else {
      console.log("looks like this isn't one of the possible options!");
      main()
    }
  });
};

let booklist = [];


const saveBook = (books) => {
          console.log("select the book you want to save to your reading list (1-5)");
          prompt.get(["bookNumber"], async function (err, res) {
            let bookNumber = parseInt(res.bookNumber);
    
            if (bookNumber < 1 || bookNumber > 5) {
              console.log("number must be between 1 and 5");
              console.log("                ");
              console.log("                ");
              // getBooks();
            }
    
            else {
              let UserSelected = books[bookNumber - 1];
            booklist.push(UserSelected);
            console.log("The book you've saved is:");
            console.log(UserSelected.volumeInfo.title);
            }
            main();
          });
        }
//is the api response as it should be?
//does the booklist have the correct books saved?
const getBooks = async () => {
  try {

    prompt.get(["findBooks"], async function (err, res) {
      if (!res.findBooks) {
        console.log("sorry, this is not valid. You must type in a valid character")
        console.log("                ");
        main();
      }

      else {
        console.log("You are looking for " + res.findBooks);
        const key = "AIzaSyDmYQmWIoPydQv0NzmBQTRS5G_w0wdNAis";
        let fields = "items(id, volumeInfo(title,authors,publisher))";
  
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?",
          {
            params: {
              key: key,
              q: res.findBooks,
              maxResults: 5,
              fields: fields,
            },
          }
        );
        const books = response.data.items;
        // console.log("BOOKS:",books);

  
        books.map((book, idx) => {
          console.log(idx + 1);
          console.log("Title:", book.volumeInfo.title);
          console.log("Author: " + book.volumeInfo.authors);
          console.log("Published by: " + book.volumeInfo.publisher);
          console.log("                ");
        });
        saveBook(books)

  
        
       
      }
      
    });
  } catch (err) {
    console.log(err);
  }
};
// does it actually display the list?
const viewBookList = () => {
  if (booklist.length <= 0) {
    console.log("Looks like there are no books in your reading list");
    getBooks();
  } else {
    console.log("Here are the entries in your list:");
    console.log("    ");

    booklist.map((entry, idx) => {
      console.log(idx + 1, "Title: " + entry.volumeInfo.title);
      console.log("  ");
      console.log("  ");
    });
    main();

  }
};

main();


// module.exports = main, viewBookList, getBooks