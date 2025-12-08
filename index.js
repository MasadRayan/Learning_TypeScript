var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var menu = [
    { name: "margarita", price: 10 },
    { name: "pepperoni", price: 10 },
    { name: "hawaiian", price: 10 },
    { name: "khaoa", price: 10 }
];
var cashInRegister = 100;
var orderQueue = [];
var orderId = 1;
var addNewPizza = function (pizza) {
    menu.push(pizza);
};
addNewPizza({ name: "jashim", price: 20 });
console.log(menu);
var placeOrder = function (name) {
    var order = menu.find(function (pizza) { return pizza.name === name; });
    if (!order) {
        console.log("".concat(name, " does not exist in the menu"));
        return;
    }
    cashInRegister += order.price;
    var newOrder = __assign(__assign({}, order), { id: orderId++, status: "ordered" });
    orderQueue.push(newOrder);
    return newOrder;
};
placeOrder("margarita");
placeOrder("pepperoni");
placeOrder("hawaiian");
placeOrder("khaoa");
placeOrder("jashim");
var completeOrder = function (id) {
    var index = orderQueue.findIndex(function (order) { return order.id === id; });
    if (!index) {
        console.log("Order with id ".concat(id, " not found"));
        return;
    }
    orderQueue[index].status = "completed";
    return orderQueue[index];
};
completeOrder(1);
completeOrder(2);
completeOrder(3);
completeOrder(4);
completeOrder(5);
console.log(orderQueue);
