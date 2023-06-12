const basket = require('../src/main');
const { assertEquals, } = require('./basket.framework');
let input, actualOutput, expectedOutput, result;


//Test1 Testing if something is added to the basket
//Arrange
input = {
    id: 'bagel'
}
expectedOutput = 1
//Act
basket.addToBasket(input)
actualOutput = basket.basketItems.length;

//Assert

result = assertEquals(actualOutput, expectedOutput);

console.log(`Test ${result ? 'PASSED' : 'FAILED'}`)

//Clean up
basket.basketItems = [];
result = undefined;
actualOutput = undefined;

//Test 2 Removing the item form the basket

//Arrange
input = {
    id: 'bagel'
}
expectedOutput = 0
//Act
basket.addToBasket(input)
basket.removeFromBasket(input);
actualOutput = basket.basketItems.length;

//Assert

result = assertEquals(actualOutput, expectedOutput);

console.log(`Test ${result ? 'PASSED' : 'FAILED'}`)

//Clean up
basket.basketItems = [];
result = undefined;
actualOutput = undefined;

//Test 3 Removing certain item form the basket

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
basket.basketItems = [input1, input2, input3];
//basket.basketItems = [input2];

basket.removeFromBasket(input2);
actualOutput = basket.basketItems.indexOf(input2);

//Assert

result = assertEquals(actualOutput, expectedOutput);

console.log(`Test ${result ? 'PASSED' : 'FAILED'}`)

//Clean up
basket.basketItems = [];
result = undefined;
actualOutput = undefined;