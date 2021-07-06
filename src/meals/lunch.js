// const menu = require('./index.js')
import prompt from "prompt"


export default function lunch(order) {
  let sandwich = 0;
  let chips = 0;
  let soda = 0;

  order.forEach((num) => {
    if (num == "1") {
      sandwich++;
    } else if (num == "2") {
      chips++;
    } else if (num == "3") {
      soda++;
    }
  });
  
  //drinks
  let drink;
  if (soda > 1) {
    drink = `Soda(x ${soda})`;
  } else if (soda <= 0) {
    drink = "Water";
  }
  else {
    drink = "Soda"
  }

  //chips
  let side;
  if (chips > 1) {
    side = `Chips(x ${chips})`;
  }
  else if (chips <= 0) {
    console.log("Unable to process: side must be ordered at least");
    side = null;
  } else {
    side = "Chips";
  }

  //sandwich
  let main;
  if (sandwich > 1) {
    console.log("Unable to process: main cannot be ordered more than once");
    // prompt.stop()
  }
  else if (sandwich <= 0) {
    console.log("Unable to process: main must be ordered at least once");
    main = null;
  } else {
    main = `Sandwich`;
  }

  let finalReturn;
  if (chips <= 0 || sandwich > 1) {
    finalReturn = null;
  }
  else {
finalReturn = console.log(`${main},${side}, ${drink}`); 
  }
  
  return finalReturn;
}
// module.exports = {
//   lunch
// }
// exports.lunch = lunch;
