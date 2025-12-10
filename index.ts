type Pizza = {
    id: number
    name: string
    price: number
}

type Order = Pizza & {
    id: number
    status: 'ordered' | "completed"
}

let nextPizzaId: number = 1

const menu: Pizza[] = [
    { id: nextPizzaId++, name: "margarita", price: 10 },
    { id: nextPizzaId++, name: "pepperoni", price: 10 },
    { id: nextPizzaId++, name: "hawaiian", price: 10 },
    { id: nextPizzaId++, name: "khaoa", price: 10 }
];

let cashInRegister: number = 100;
const orderQueue: Order[] = [];
let orderId: number = 1;

const addNewPizza = (pizza: Omit<Pizza, "id">): Pizza => {
    const newPizzaObject = {
        id: nextPizzaId++,
        ...pizza
    }
    menu.push(newPizzaObject);
    return newPizzaObject;
};

addNewPizza({ name: "jashim", price: 20 });
console.log(menu);

const placeOrder = (name: string): Order | undefined => {
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

const completeOrder = (id: number): Order | undefined => {
    const index = orderQueue.findIndex(order => order.id === id);

    if (!index) {
        console.log(`Order with id ${id} not found`);
        return;
    }

    orderQueue[index].status = "completed";
    return orderQueue[index];
};


const getPizzaDetails = (identifier: string | number): Pizza | undefined => {
    const singlePizza = menu.find(pizza => pizza.name.toLowerCase() === identifier.toString().toLowerCase() || pizza.price === identifier);
    return singlePizza;
}

completeOrder(1);
completeOrder(2);
completeOrder(3);
completeOrder(4);
completeOrder(5);

console.log(orderQueue);




const gameScore = [10, 11, 12, 13, 14];
const favouriteThings = ["apple", "banana", "carrot", "dog", "cat"];
const voters = [
    {
        name: "Masad",
        age: 23,
    },
    {
        name: "Bob",
        age: 54,
    }
]

function getLastItem<PlaceholderType>(array: PlaceholderType[]) {
    return array[array.length - 1]
}

console.log(getLastItem(gameScore));
console.log(getLastItem(favouriteThings));
console.log(getLastItem(voters));