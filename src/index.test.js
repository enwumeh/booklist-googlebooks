const getBooks = require('./index.js')

test('search results should be 5 entries', () => {
  expect(books.length).toBe(5);
})