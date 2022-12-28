const prompt = require("prompt-sync")({ sigint: true });

const clothingItems = [{"shirt": 100}, {"shorts": 40}, {"gown": 250}, {"pant": 30}]
const electronicsItems= [{"Iphone": 1000}, {"Samsung": 900}, {"HP": 2500}, {"Car": 1000000}, {"Private jet": 35000000}]
let cart = []

function welcome() {
    let name = prompt("Enter your name: ")
    console.log(`${name}, Welcome to Genesys Learnable shop \n We have all your needs.`);
}

function generalInput() {
    const userInput = parseInt(prompt("Select: "));
    return userInput;
}

function option() {
    console.log("Press \n 1: For clothing line \n 2: For electronics \n 3: To logout");
}

function clothing() {
    for(var i = 0; i < clothingItems.length; i++){
        var [cloths] = Object.entries(clothingItems[i])
        console.log(`${cloths[0]} --> $${cloths[1]} \n Press ${i} to add to cart or to buy `);
    }
    let input = generalInput();
    switch (input) {
        case 1: console.log("working");
            
            break;
    
        default:
            break;
    }
}

function electronics() {
    
}

function addToCart(params) {
    
}

function removeFromCart(params) {
    
}

function payment() {
    
}
clothing()