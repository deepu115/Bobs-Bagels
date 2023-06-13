const Basket = require('../src/Basket');
const { assertEquals, } = require('./basket.framework');
let input, actualOutput, expectedOutput, result;


//Test1 Testing if something is added to the basket
//Arrange
input = {
    id: 'bagel'
}
expectedOutput = 1
//Act
Basket.addToBasket(input)
actualOutput = Basket.basketItems.length;

//Assert

result = assertEquals(actualOutput, expectedOutput);

console.log(`Test ${result ? 'PASSED' : 'FAILED'}`)

//Clean up
Basket.basketItems = [];
result = undefined;
actualOutput = undefined;

//Test 2 Removing the item form the Basket

//Arrange
input = {
    id: 'bagel'
}
expectedOutput = 0
//Act
Basket.addToBasket(input)
Basket.removeFromBasket(input);
actualOutput = Basket.basketItems.length;

//Assert

result = assertEquals(actualOutput, expectedOutput);

console.log(`Test ${result ? 'PASSED' : 'FAILED'}`)

//Clean up
Basket.basketItems = [];
result = undefined;
actualOutput = undefined;

//Test 3 Removing certain item from the Basket

//Arrange
let input1 = {
    id: 'bagel'
}

let input2 = {
    id: 'bagel2'
}

let input3 = {
    id: 'bagel3'
}
expectedOutput = -1;
//Act
Basket.basketItems = [input1, input2, input3];
//Basket.basketItems = [input2];

Basket.removeFromBasket(input2);
actualOutput = Basket.basketItems.indexOf(input2);

//Assert

result = assertEquals(actualOutput, expectedOutput);

console.log(`Test ${result ? 'PASSED' : 'FAILED'}`)

//Clean up
Basket.basketItems = [];
result = undefined;
actualOutput = undefined;

