const books = require('./index.js');
const initPrompt = require('./index.js');


// const books = require('./index.js');
// test('search results should be 5 entries', () => {
//   expect(books.length).toBe(5);
// })

global.console.log = jest.fn();

describe("Unit tests for program", () => {
  test("Verify if console.log is called", () => {
    initPrompt();
    expect(console.log).toBeCalledTimes(1)
    expect(console.log).toHaveBeenLastCalledWith('! What would you like to search for? Options are "books" and  "see list"')
  })
})