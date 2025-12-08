type Pizza = {
    name: string
    price: number
}

type Order = Pizza & {
    id: number
    status: string
}

let menu = [
    { name: "margarita", price: 10 },
    { name: "pepperoni", price: 10 },
    { name: "hawaiian", price: 10 },
    { name: "hawaiian", price: 10 }
];

let cashInRegister: number = 100;
let orderQueue: Order[] = [];
let orderId: number = 1;

const addNewPizza = (pizza: Pizza) => {
    menu.push(pizza);
};

addNewPizza({ name: "jashim", price: 20 });

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

const completeOrder = (id: number) => {
    const index = orderQueue.findIndex(order => order.id === id);

    if (index === -1) {
        console.log(`Order with id ${id} not found`);
        return;
    }

    orderQueue[index].status = "completed";
    return orderQueue[index];
};

completeOrder(1);
completeOrder(2);
completeOrder(3);

console.log(orderQueue);
