const Basket = require('../src/Basket');
const { assertEquals, } = require('./basket.framework');

let Basket1 = new Basket;
let actualOutput
console.log('\n Basket Capacity \n ==========================')

console.log('Test 4 - making sure Basket does not exceed Basket capacity');
//Arrange
input1 = {
    id: 'bagel'
}

input2 = {
    id: 'bagel2'
}

input3 = {
    id: 'bagel3'
}
expectedOutput = 1; //we are expecting 1 item whilst attempting to input 3
//Act
Basket1.addToBasket(input1);
Basket1.addToBasket(input2);
Basket1.addToBasket(input3);
actualOutput = Basket1.basketItems.length;

result = assertEquals(actualOutput, expectedOutput);
console.log(`Test ${result ? 'PASSED' : 'FAILED'} (output: ${actualOutput})`)

//clean up
Basket1.basketItems = [];
result = undefined;
actualOutput = undefined;


//test 5 - does isBasketFull function work
//const isFull = actualOutput.isFull();
//assertEquals(isFull, true)
//console.log("Test passed");
console.log('\n Basket Capacity \n ==========================')

console.log('Test 4 - does isBasketFull function work');
//Arrange
input1 = {
    id: 'bagel'
}

input2 = {
    id: 'bagel2'
}

input3 = {
    id: 'bagel3'
}
expectedOutput = true; //we are expecting 1 item whilst attempting to input 3
//Act
Basket1.addToBasket(input1);
Basket1.addToBasket(input2);
Basket1.addToBasket(input3);
actualOutput = Basket1.isBasketFull();

result = assertEquals(actualOutput, expectedOutput);
console.log(`Test ${result ? 'PASSED' : 'FAILED'} (output: ${actualOutput})`)

//clean up
Basket1.basketItems = [];
result = undefined;
actualOutput = undefined;
