const books = require('./index.js');
const bookie = require('./index.js');
const viewBookList = require('./index.js');
const initPrompt = require('./index.js');
const axios = require('axios')
const toBeType = require("jest-tobetype");
expect.extend(toBeType);

jest.mock('axios')

describe("Unit tests for program", () => {
  global.console.log = jest.fn();

  test("Verify if console.log is called", () => {
    initPrompt();
    expect(console.log).toBeCalledTimes(1)
    expect(console.log).toHaveBeenLastCalledWith( '\n'+'\n'+'How can I help? Options are "books" and  "see list"')
  })
})

// describe('api call function test', () => {
//   it("should return an array", async ()  => {
//     const call = bookie("whatever")
//     expect(Array.isArray(call)).toBe(true)
// })
  
// })

let apiData = [
  {
    id: 'yRepBQAAQBAJ',
    volumeInfo: {
      title: 'The Something',
      authors: [Array],
      publisher: 'Pan Macmillan'
    }
  },
  {
    id: 'DNUzGCpDInEC',
    volumeInfo: {
      title: 'Something in the Soil',
      authors: [Array],
      publisher: 'W. W. Norton & Company'
    }
  },
  {
    id: 'kwxxsEOAVuoC',
    volumeInfo: {
      title: 'Something Real',
      authors: [Array],
      publisher: 'Kensington Books'
    }
  },
  {
    id: 'kOupyJWFoSQC',
    volumeInfo: {
      title: 'Something Hidden',
      authors: [Array],
      publisher: 'Formac Publishing Company'
    }
  },
  {
    id: 'X-CILqF-RugC',
    volumeInfo: {
      title: 'Something Happened',
      authors: [Array],
      publisher: 'Simon and Schuster'
    }
  }
]

// describe('api call function test', () => {
//   it("should return an array", async ()  => {
//     axios.get = jest.fn().mockResolvedValue(apiData)
//     const call = await bookie(["whatever"]);
//     // expect(Array.isArray(call)).toBe(true)
//     expect(call).toEqual(apiData)
// })
  
// })


// describe('api call function test', () => {
//   it("should return an array", async ()  => {
//     axios.get.mockReturnValue(Promise.resolve(apiData))
//     const call = await bookie(["whatever"]);
//     // expect(Array.isArray(call)).toBe(true)
//     expect(call).toEqual(apiData)
// })
  
// })

// it("gets api data", async () => {
//   axios.get.mockImplementationOnce(() => {
//     Promise.resolve(apiData)
//   })
  
//   const call = await bookie("whatever");
//   expect(axios.get).toHaveBeenCalledTimes(1)
// })


describe('function test', () => {
  it("should return an an array",  ()  => {
    const call = viewBookList()
    // expect(Array.isArray(call)).toBe(true)
    expect(call).toBeType("array")
})
})




