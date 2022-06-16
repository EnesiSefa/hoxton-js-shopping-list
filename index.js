// Instructions
// - Use these items and it's respective prices as a starting point: Milk at £1,20, Cocoa at £2,00, Salad at £2,00, Carrots at £2,00, Tomatoes at £2,50, Ready meals at £ 5,00
// - Store this information using the most appropriated data structures we've studied so far
// - Have a prompt to add an item to the list (you can have two prompts for the item and its price)
// - Output a list displaying each item and its price
// - Output the total at the end



const menuList = [
     "Milk",
     "Cocoa", 
     "Salald", 
     "Carrots",
     "Tomatoes", 
     "Ready meals"
]
let price = [1.20, 2.00, 2.00, 2.00, 2.50, 5.00]

let newItem = prompt("enter your item")
menuList.push(newItem)
console.log(menuList)

let newPrice = Number(prompt("enter your price"))
price.push(newPrice)
console.log(price)






let sum = 0
 for (let i = 0; i < price.length; [i++]){
        sum += price[i]
     console.log( "the total you need to pay " + sum)
 }

