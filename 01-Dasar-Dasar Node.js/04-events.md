# 📚 Node.js Events: A Comprehensive Guide 🚀

Welcome to this comprehensive guide on **Node.js Events**! This documentation will walk you through the concept of event-driven programming in Node.js, providing detailed explanations, examples, and practical exercises. By the end of this guide, you'll have a solid understanding of how to use the `EventEmitter` class to build event-driven applications in Node.js.

## 📑 Table of Contents

- [📚 Node.js Events: A Comprehensive Guide 🚀](#-nodejs-events-a-comprehensive-guide-)
  - [📑 Table of Contents](#-table-of-contents)
  - [🌟 Introduction to Event-Driven Programming](#-introduction-to-event-driven-programming)
  - [🛠 Understanding the EventEmitter Class](#-understanding-the-eventemitter-class)
  - [🎧 Registering Event Listeners](#-registering-event-listeners)
  - [🚀 Emitting Events](#-emitting-events)
  - [🎛 Handling Multiple Listeners](#-handling-multiple-listeners)
  - [🎉 Practical Exercise: Birthday Event](#-practical-exercise-birthday-event)
    - [Explanation:](#explanation)
  - [📚 References \& Additional Resources](#-references--additional-resources)

---

## 🌟 Introduction to Event-Driven Programming

In the real world, our lives are governed by events. For example, when it starts to rain, we open an umbrella; when our phone rings, we answer the call; when we feel hungry, we eat. These are all examples of **event-driven behavior**, where actions are triggered by specific events.

In the world of programming, especially in Node.js, **event-driven programming** is a paradigm where the flow of the program is determined by events such as user actions, sensor outputs, or messages from other programs. This is in contrast to traditional **imperative programming**, where the program follows a predefined sequence of instructions.

Node.js, being an asynchronous, event-driven runtime, is particularly well-suited for building applications that need to handle multiple events simultaneously. This is achieved using the `EventEmitter` class, which is part of the `events` core module.

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 🛠 Understanding the EventEmitter Class

The `EventEmitter` class is a core component of Node.js that allows you to create, fire, and listen for your own events. Here's how you can use it:

```javascript
const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();
```

In this example, `myEventEmitter` is an instance of the `EventEmitter` class. This instance can now be used to register event listeners and emit events.

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 🎧 Registering Event Listeners

To handle an event, you need to register a **listener** (a function) that will be executed when the event occurs. This is done using the `on` method:

```javascript
const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat!`);
};

myEventEmitter.on('coffee-order', makeCoffee);
```

In this example, the `makeCoffee` function is registered as a listener for the `coffee-order` event. When the `coffee-order` event is emitted, the `makeCoffee` function will be executed.

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 🚀 Emitting Events

To trigger an event, you use the `emit` method. This method takes the name of the event as its first argument, followed by any additional arguments that should be passed to the listener function:

```javascript
const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat!`);
};

myEventEmitter.on('coffee-order', makeCoffee);

myEventEmitter.emit('coffee-order', { name: 'Tubruk' });

/**
 * Output:
 * Kopi Tubruk telah dibuat!
 */
```

Here, the `emit` method triggers the `coffee-order` event, and the `makeCoffee` function is executed with the provided arguments.

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 🎛 Handling Multiple Listeners

You can register multiple listeners for the same event. When the event is emitted, all registered listeners will be executed in the order they were registered:

```javascript
const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat!`);
};

const makeBill = ({ price }) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
};

myEventEmitter.on('coffee-order', makeCoffee);
myEventEmitter.on('coffee-order', makeBill);

myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });

/**
 * Output:
 * Kopi Tubruk telah dibuat!
 * Bill sebesar 15000 telah dibuat!
 */
```

In this example, both `makeCoffee` and `makeBill` are executed when the `coffee-order` event is emitted.

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 🎉 Practical Exercise: Birthday Event

Let's put what we've learned into practice! Create a new folder named `events` and inside it, create a file named `index.js`. Write the following starter code:

```javascript
// TODO 1
const { EventEmitter } = require('events');

// TODO 2
const myEmitter = new EventEmitter();

// TODO 3
const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
};

myEmitter.on('birthday', birthdayEventListener);

// TODO 4
myEmitter.emit('birthday', 'John');

/**
 * Output:
 * Happy birthday John!
 */
```

### Explanation:

1. **TODO 1**: Import the `EventEmitter` class from the `events` module.
2. **TODO 2**: Create an instance of `EventEmitter` named `myEmitter`.
3. **TODO 3**: Register the `birthdayEventListener` function as a listener for the `birthday` event.
4. **TODO 4**: Emit the `birthday` event with the name `John`.

Run the file using the command:

```bash
node ./events/index.js
```

You should see the following output:

```
Happy birthday John!
```

[🔝 Back to Table of Contents](#-table-of-contents)

---

## 📚 References & Additional Resources

- [Node.js Documentation: Events](https://nodejs.org/api/events.html)
- [Understanding Event-Driven Programming](https://www.freecodecamp.org/news/understanding-node-js-event-driven-architecture-223292fcbc2d/)
- [Node.js EventEmitter Tutorial](https://www.digitalocean.com/community/tutorials/using-events-in-node-js)

[🔝 Back to Table of Contents](#-table-of-contents)

