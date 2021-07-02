const prompt = require("prompt");
const axios = require("axios");

const initPrompt = () => {
  return console.log(
    '\n'+'\n'+'How can I help? Options are "books" and  "see list"'
  );
}
  const main = () => {
    prompt.start();
    initPrompt();
      
  prompt.get(["option"], function (err, res) {
    if (res.option == "books") {
      // let gg = getBooks.
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
//should save correct book into list
const saveBook = (books) => {
          console.log("select the book you want to save to your reading list (1-5)");
          prompt.get(["bookNumber"], async function (err, res) {
            let bookNumber = parseInt(res.bookNumber);
    
            if (bookNumber < 1 || bookNumber > 5) {
              
              console.log('\n'+'\n'+"number must be between 1 and 5");
            }
    
            else {
              let UserSelected = books[bookNumber - 1];
            booklist.push(UserSelected);
            console.log("The book you've saved is:");
            console.log(UserSelected.volumeInfo.title);
            }
            main();
          });
    return booklist;
        }
//is the api response as it should be?
//does the booklist have the correct books saved?

const bookie = async (userBookInput) => {
  console.log("You are looking for " + userBookInput);
  const key = "AIzaSyDmYQmWIoPydQv0NzmBQTRS5G_w0wdNAis";
  let fields = "items(id, volumeInfo(title,authors,publisher))";

  const response = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?",
    {
      params: {
        key: key,
        q: userBookInput,
        maxResults: 5,
        fields: fields,
      },
    }
  );

  const books = response.data.items;
  // console.log(books)
  return books;
}

const getBooks = async () => {
  try {
    
    console.log('\n'+'What would you like to search for?')
    
    prompt.get(["findBooks"], async function (err, res) {
      if (!res.findBooks) {
        console.log('\n'+"sorry, this is not valid. You must type in a valid keyboard character")
       
        main();
      }

      else {

        const book1 = await bookie(res.findBooks)
        console.log(book1)

  
        book1.map((book, idx) => {
          console.log(idx + 1);
          console.log("Title:", book.volumeInfo.title);
          console.log("Author: " + book.volumeInfo.authors);
          console.log("Published by: " + book.volumeInfo.publisher);
          console.log(" ");
        });
        saveBook(book1)
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

    let listed = booklist.map((entry, idx) => {
      console.log(idx + 1, "Title: " + entry.volumeInfo.title);
      console.log("  ");
      console.log("  ");
    });
    main();

  }
  return listed;
};

main();


module.exports = main, viewBookList, getBooks, bookie