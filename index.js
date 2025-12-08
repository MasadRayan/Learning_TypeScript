const menu = [
    { name: "margarita", price: 10 },
    { name: "pepperoni", price: 10 },
    { name: "hawaiian", price: 10 },
    { name: "hawaiian", price: 10 }
]

let cashInRegister = 100;
const orderQueue = [];
let orderId = 1;

const addnewPizza = (pizza) => {
    menu.push(pizza);
}

addnewPizza({name: "jashim", price: 20});
// console.log(menu);


const placeOrder = (name) => {
    const order = menu.find((pizza) => pizza.name === name)
    cashInRegister += order.price;
    const newOrder = {...order, id: orderId++, status: "ordered"}
    orderQueue.push(newOrder);
    return newOrder ;
}

placeOrder("margarita");
placeOrder("pepperoni");
placeOrder("hawaiian");

// console.log(cashInRegister);
// console.log(orderQueue);


const completeOrder = (id) => {
    const placedOrder = orderQueue.find(order => order.id === id)
    const updatedOrder = {...placedOrder, status: "completed"};
    return updatedOrder;
    
}

completeOrder(1);
completeOrder(2);
completeOrder(3);

console.log(orderQueue);

