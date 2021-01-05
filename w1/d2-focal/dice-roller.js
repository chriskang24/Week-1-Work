
function rollAllDices(number) {

let diceRolls = [];

  for (let i = 1; i <= number; i++) {
    
    diceRolls += getRandomInt(1,6);

    if (i !== number) {
    diceRolls += ", ";
    } 
  }
    return (`Rolled ${number} dice: `) + diceRolls;
};

console.log(rollAllDices(3))



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// console.log(getRandomInt(1,6))
