type Pizza = {
    name: string
    price: number
}

type Order = Pizza & {
    id: number
    status: 'ordered' | "completed" 
}

const menu: Pizza[] = [
    { name: "margarita", price: 10 },
    { name: "pepperoni", price: 10 },
    { name: "hawaiian", price: 10 },
    { name: "khaoa", price: 10 }
];

let cashInRegister: number = 100;
const orderQueue: Order[] = [];
let orderId: number = 1;

const addNewPizza = (pizza: Pizza): void => {
    menu.push(pizza);
}; 

addNewPizza({ name: "jashim", price: 20 });
console.log(menu);

const placeOrder = (name: string)=> {
    const order = menu.find(pizza => pizza.name === name);

    if (!order) {
        console.log(`${name} does not exist in the menu`);
        return;
    }

    cashInRegister += order.price;

    const newOrder: Order = { ...order, id: orderId++, status: "ordered" };
    orderQueue.push(newOrder);

    return newOrder;
};

placeOrder("margarita");
placeOrder("pepperoni");
placeOrder("hawaiian");
placeOrder("khaoa");
placeOrder("jashim");

const completeOrder = (id: number) => {
    const index = orderQueue.findIndex(order => order.id === id);

    if (!index) {
        console.log(`Order with id ${id} not found`);
        return;
    }

    orderQueue[index].status = "completed";
    return orderQueue[index];
};


const getPizzaDetails = (identifier: string | number): Pizza | undefined => {
    const singlePizza  = menu.find(pizza => pizza.name.toLowerCase() === identifier.toString().toLowerCase() || pizza.price === identifier);
    return singlePizza;
}

completeOrder(1);
completeOrder(2);
completeOrder(3);
completeOrder(4);
completeOrder(5);

console.log(orderQueue);
