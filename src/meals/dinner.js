export default function dinner(order) {
  let steak = 0;
  let potatoes = 0;
  let wine = 0;
  let cake = 0;

  order.forEach((num) => {
    if (num == "1") {
      steak++;
    } else if (num == "2") {
      potatoes++;
    } else if (num == "3") {
      wine++;
    } else if (num == "4") {
      cake++;
    }
  });
  //drinks
  let drink;
  if (wine > 1) {
    drink = `Wine(${wine})`;
  } else if (wine <= 0) {
    console.log("Unable to process: side must be ordered at least");
    drink = null;
  } else {
    drink = `Wine`;
  }

  //chips
  let side;
  if (cake > 1) {
    side = `Potatoes(${potatoes})`;
  } else if (potatoes <= 0) {
    console.log("Unable to process: side must be ordered at least");
    side = null;
  } else {
    side = `Potatoes`;
  }

  //sandwich
  let main;
  if (steak > 1) {
    main = `Steak(${steak})`;
  } else if (steak <= 0) {
    console.log("Unable to process: main dish must be ordered exactly once");
    main = null;
  } else {
    main = `Steak`;
  }

  let dessert;
  if (cake > 1) {
    dessert = `Cake(${cake})`;
  } else if (cake <= 0) {
    console.log("Unable to process: dessert must be ordered at least once");
    // dessert = null;
  } else {
    dessert = `Cake`;
  }

  let finalReturn;
  if (steak <= 0 || cake <= 0 || potatoes <= 0) {
    finalReturn = null;
  } else {
    finalReturn = console.log(
      `${main},${side}, ${drink}, ${dessert} and Water`
    );
  }
}

// module.exports = {
//   dinner
// }
