const prompt = require("prompt-sync")({ sigint: true });

const clothingItems = [{"shirt": 100}, {"shorts": 40}, {"gown": 250}, {"pant": 30}]
const electronicsItems= [{"Iphone": 1000}, {"Samsung": 900}, {"Car": 1000000}, {"Private jet": 35000000}]
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
    console.log("Press \n 1: For clothing line \n 2: For electronics \n 3: To buy every product in the cart \n Press 5 to display cart items \n Press Any key to exit");
    let input = generalInput();
    switch (input) {
        case 1:
            clothing();
            break;
        case 2:
            electronics();
            break;
        case 3:
            payment();
            break;
        case 4:
            removeFromCart()
            break;
        case 5:
            console.log("Items in your cart are: ");
            displayCartItems();
            break;
        default:
            exit();
    }
}

function clothing() {
    for(var i = 0; i < clothingItems.length; i++){
        var [cloths] = Object.entries(clothingItems[i])
        console.log(`${cloths[0]} --> $${cloths[1]} \n Press ${i} to add to cart or to buy \n Press any key to exit`);
    }
    let input = generalInput();
    if (input == 0 || input == 1 || input == 2 || input == 3){
        var [cloths] = Object.entries(clothingItems[input])
        console.log(`You're interested in ${cloths[0]} \n Press 1 to buy \n Press 2 to add to cart \n Press 3 to buy all items in the cart \n Press any key to go back`);
        var input2 = generalInput();
        if (input2 == 1){
            buyProduct(clothingItems[input])
        } else if (input2 ==2){
            addToCart(clothingItems[input])
        } else if (input2 == 3){
            payment();
        } else {
            clothing();
        }
    } else {
        exit();
    }
}

function electronics() {
    for(var i = 0; i < electronicsItems.length; i++){
        var [electro] = Object.entries(electronicsItems[i])
        console.log(`${electro[0]} --> $${electro[1]} \n Press ${i} to add to cart or to buy \n Press any key to exit`);
    }
    let input = generalInput();
    if (input == 0 || input == 1 || input == 2 || input == 3){
        var [electro] = Object.entries(electronicsItems[input])
        console.log(`You're interested in ${electro[0]} \n Press 1 to buy \n Press 2 to add to cart \n Press 3 to buy all items in the cart \n Press any key to go back`);
        var input2 = generalInput();
        if (input2 == 1){
            buyProduct(electronicsItems[input])
        } else if (input2 ==2){
            addToCart(electronicsItems[input])
        } else if (input2 == 3){
            payment();
        } else {
            electronics()
        }
    } else {
        exit();
    }
}

function addToCart(product) {
    cart.push(product);
    option();
}

function buyProduct(product) {
    let [item] = Object.entries(product);
    console.log(`You just bought ${item[0]} total cost: $${item[1]} \n Thanks for petronising us`);
    console.log("Press 1 to visit clothing \nPress 2 to visit Electronic \nPress any key to exit");
    let input = generalInput("Select:...")
    if (input == 1){
            clothing()
        } else if (input ==2){
            electronics()
        } else {
            exit()
        }
}

// function removeFromCart() {
//     if (cart.length <= 0){
//         console.log("Cart is empty");
//         option()
//     } else {
//         console.log("Name of the item you wish to remove");
//         let itemToRemove = generalInput()
//         for(var i = 0; i <= cart.length; i++){
//             var [individulItem] = Object.entries(cart[i] || {});
//             if(individulItem[0] == itemToRemove){
//                 cart.splice(i);
//                 option();
//             }
//         }
//         console.log(`${itemToRemove} is not in the cart`);
//     }
// }

function payment() {
    prod = []
    let cost = 0;
    if (cart.length < 1){
        console.log("No item in the cart");
        option()
    
    } else {
        for(var i = 0; i < cart.length; i++){
            var [items] = Object.entries(cart[i])
            cost += items[1];
            prod.push(items[0])
        }
        console.log("You bought the following items...");
        prod.forEach(element => {
            console.log(element);
        });
        console.log(`Total cost $${cost}`);
        cart = []
        option();
    }
    
}

function displayCartItems() {
    if (cart.length <= 0){
        console.log("Cart is empty");
        option();
    }
    for (var i = 0; i < cart.length; i++){
        let [item] = Object.entries(cart[i]);
        console.log(item[0]);
    }
    option()
}

function exit(){
    console.log("Thanks, we hope to see you next time");
}



option()