const queue = [];

queue.push("Person A");
queue.push("Person B");
queue.push("Person C");

console.log("Queue before dequeue: ", queue);

const served = queue.shift(); // dequeue

console.log("Served: ", served);
console.log("Queue after dequeue: ", queue);
