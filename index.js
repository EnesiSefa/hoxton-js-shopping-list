// Instructions
// - Use these items and it's respective prices as a starting point: Milk at £1,20, Cocoa at £2,00, Salad at £2,00, Carrots at £2,00, Tomatoes at £2,50, Ready meals at £ 5,00
// - Store this information using the most appropriated data structures we've studied so far
// - Have a prompt to add an item to the list (you can have two prompts for the item and its price)
// - Output a list displaying each item and its price
// - Output the total at the end



const menuList = [["Milk",1.20],["Cocoa",2.00],["Salad",2.00],["Carrots",2.00], ["Tomatoes",2.50],["Ready meals",5.00] ]

// let grocery = prompt("What do you like to buy?")





const prices =[1.20, 2.00, 2.00, 2.00, 2.50, 5.00]


for (let i = 0, sum = 0; i <= prices.length; sum += prices[i++]){
    console.log( "the total you need to pay " + sum)
}

for(let item of menuList){
    console.log(item)
}
