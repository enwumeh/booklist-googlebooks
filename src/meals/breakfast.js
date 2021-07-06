export default function breakfast(order) {
  let eggs = 0;
  let toast = 0;
  let coffee = 0;

  order.forEach((num) => {
    if (num == "1") {
      eggs++;
    } else if (num == "2") {
      toast++;
    } else if (num == "3") {
      coffee++;
    }
  });
  //drink: coffee
  let drink;
  if (coffee > 1) {
    drink = `Coffee(x${coffee})`;

  } else if ((coffee <= 0)) {
    drink = "Water";
  } else {
    drink = "Coffee";
  }

  //side: toast
  let side;
  if (toast > 1) {
    side = `Toast(x${toast})`;
  } else if ((toast <= 0)) {
    side = null;
    console.log("Unable to process: side must be ordered at least once");
  } else {
    side = "Toast";
  }

  //main: eggs
  let main;
  if (eggs > 1) {
    main = `Eggs(${eggs})`;
  } else if (eggs <= 0) {
    console.log("Unable to process: Sandwich must be ordered exactly once");
    main = null;
  } else {
    main = "Eggs";
  }
  let finalReturn;
  if (eggs <= 0 || toast <= 0 ) {
    finalReturn = null;
  }
  else {
finalReturn = console.log(`${main},${side}, ${drink}`); 
  }
  
  return finalReturn;
}
