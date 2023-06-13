const Basket = require('../src/Basket');
const { assertEquals, } = require('./basket.framework');
const Item = require('../src/Item');

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


console.log('Test 5 - does increaseBasketCapacityTo() increase basket size');
//Arrange
randomInput = Math.ceil(Math.random() * 10);
input = Basket1.increaseBasketCapacityTo(randomInput);
expectedOutput = randomInput; //we are expecting 1 item whilst attempting to input 3
//Act
// Basket1.addToBasket(input1);
// Basket1.addToBasket(input2);
// Basket1.addToBasket(input3);
actualOutput = Basket1.maxCapacity;

result = assertEquals(actualOutput, expectedOutput);
console.log(`Test ${result ? 'PASSED' : 'FAILED'} (output: ${actualOutput} expected ${expectedOutput})`)

//clean up
Basket1.basketItems = [];
result = undefined;
actualOutput = undefined;
Basket1.maxCapacity = 1;


//ints only
console.log('Test 6 - does increaseBasketCapacityTo() only take ints');
//Arrange
randomInput = '4';
//(Math.random() * 10).toFixed(3);
input = Basket1.increaseBasketCapacityTo(randomInput);
expectedOutput = 1; //we are expecting 1 item whilst attempting to input 3
//Act
// Basket1.addToBasket(input1);
// Basket1.addToBasket(input2);
// Basket1.addToBasket(input3);
actualOutput = Basket1.maxCapacity;

result = assertEquals(actualOutput, expectedOutput);
console.log(`Test ${result ? 'PASSED' : 'FAILED'} (output: ${actualOutput} expected ${expectedOutput})`)

//clean up
Basket1.basketItems = [];
result = undefined;
actualOutput = undefined;
Basket1.maxCapacity = 1;

//increase only

console.log('Test 7 - does increaseBasketCapacityTo() only increase the size (not decrease)');
//Arrange
randomInput = '4';
//(Math.random() * 10).toFixed(3);
input = Basket1.increaseBasketCapacityTo(0);
expectedOutput = 1; //we are expecting 1 item whilst attempting to input 3
//Act
// Basket1.addToBasket(input1);
// Basket1.addToBasket(input2);
// Basket1.addToBasket(input3);
actualOutput = Basket1.maxCapacity;

result = assertEquals(actualOutput, expectedOutput);
console.log(`Test ${result ? 'PASSED' : 'FAILED'} (output: ${actualOutput} expected ${expectedOutput})`)

//clean up
Basket1.basketItems = [];
result = undefined;
actualOutput = undefined;
Basket1.maxCapacity = 1;

const item1 = new Item();
console.log('Test 7 - does getId() return a id of type string (from the class file');
//Arrange
input = Basket1.increaseBasketCapacityTo(0);
expectedOutput = 'bagel1'; //we are expecting 1 item whilst attempting to input 3
//Act
// Basket1.addToBasket(input1);
// Basket1.addToBasket(input2);
// Basket1.addToBasket(input3);
actualOutput = item1.getId();

result = assertEquals(actualOutput, expectedOutput);
console.log(`Test ${result ? 'PASSED' : 'FAILED'} (output: ${actualOutput} expected ${expectedOutput})`)

//clean up
Basket1.basketItems = [];
result = undefined;
actualOutput = undefined;
Basket1.maxCapacity = 1;

console.log('Test 8 - return correct bool on itemExists()');
//Arrange
input = item1.getId();
expectedOutput = false; //we are expecting 1 item whilst attempting to input 3
//Act
// Basket1.addToBasket(input1);
// Basket1.addToBasket(input2);
// Basket1.addToBasket(input3);
actualOutput = Basket1.itemExists(input);

result = assertEquals(actualOutput, expectedOutput);
console.log(`Test ${result ? 'PASSED' : 'FAILED'} (output: ${actualOutput} expected ${expectedOutput})`)

//clean up
Basket1.basketItems = [];
result = undefined;
actualOutput = undefined;
Basket1.maxCapacity = 1;

console.log('Test 9 - add item id & have itemExists return true');
//Arrange
input = Basket1.addToBasket(item1.getId());
expectedOutput = true; //we are expecting 1 item whilst attempting to input 3
//Act
// Basket1.addToBasket(input1);
// Basket1.addToBasket(input2);
// Basket1.addToBasket(input3);
actualOutput = Basket1.itemExists(item1.getId());

result = assertEquals(actualOutput, expectedOutput);
console.log(`Test ${result ? 'PASSED' : 'FAILED'} (output: ${actualOutput} expected ${expectedOutput})`)
console.log(Basket1.basketItems);
//clean up
Basket1.basketItems = [];
result = undefined;
actualOutput = undefined;
Basket1.maxCapacity = 1;