// const books = require('./index.js');
// test('search results should be 5 entries', () => {
//   expect(books.length).toBe(5);
// })

const main = require('./index.js')
console = {
  log: jest.fn()
}

it('calls a console.log', () => {
  main = jest.fn();
  
  console.log('hey')
  expect(main).toHaveBeenCalledWith('hey')
})