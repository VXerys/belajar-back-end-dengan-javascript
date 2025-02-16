
# 📚 Node.js Process Object Documentation

Welcome to the comprehensive documentation on the **Process Object** in Node.js! This guide will walk you through the essential concepts, properties, and methods of the `process` object, providing detailed explanations, examples, and additional resources. Whether you're a beginner or an experienced developer, this documentation will serve as a valuable reference for understanding and utilizing the `process` object effectively.

---

## 📑 Table of Contents

- [📚 Node.js Process Object Documentation](#-nodejs-process-object-documentation)
  - [📑 Table of Contents](#-table-of-contents)
  - [🌟 Introduction to the Process Object](#-introduction-to-the-process-object)
  - [🔑 Key Properties of the Process Object](#-key-properties-of-the-process-object)
    - [`process.env`](#processenv)
      - [Example:](#example)
    - [`process.argv`](#processargv)
      - [Example:](#example-1)
    - [`process.memoryUsage()`](#processmemoryusage)
      - [Example:](#example-2)
  - [🛠️ Practical Examples](#️-practical-examples)
    - [Example 1: Using `process.env` for Environment-Specific Configuration](#example-1-using-processenv-for-environment-specific-configuration)
    - [Example 2: Parsing Command-Line Arguments with `process.argv`](#example-2-parsing-command-line-arguments-with-processargv)
    - [Example 3: Monitoring Memory Usage with `process.memoryUsage()`](#example-3-monitoring-memory-usage-with-processmemoryusage)
  - [🎯 Challenge: Hands-On Practice](#-challenge-hands-on-practice)
    - [Objective:](#objective)
      - [Starter Code:](#starter-code)

---

## 🌟 Introduction to the Process Object

In computer science, a **process** refers to a program that is currently being executed by one or more threads. In Node.js, the `process` object is a global object that provides information about and control over the current Node.js process. It is an essential part of Node.js, allowing developers to interact with the environment in which their application is running.

You can view the processes running on your computer using tools like:
- **Task Manager** (Windows)
- **System Monitor** (Ubuntu)
- **Activity Monitor** (macOS)

The `process` object in Node.js offers various properties and methods to access details about the environment, memory usage, and command-line arguments.

---

## 🔑 Key Properties of the Process Object

### `process.env`

The `process.env` property is an object that contains information about the environment in which the process is running. It is commonly used to store and retrieve environment-specific variables, such as configuration settings or user information.

#### Example:
```javascript
console.log(process.env.PWD); // Prints the current working directory
console.log(process.env.USER); // Prints the username of the current user
```

You can also manually set environment variables:
```bash
NODE_ENV=production node app.js
```

In your code, you can use these variables to control the flow of your application:
```javascript
const hostname = process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com';
```

### `process.argv`

The `process.argv` property is an array that contains the command-line arguments passed when the Node.js process was launched. The first element is the path to the Node.js executable, the second is the path to the script being executed, and the remaining elements are any additional arguments.

#### Example:
```bash
node app.js "harry" "potter"
```

```javascript
const firstName = process.argv[2];
const lastName = process.argv[3];
console.log(`Hello ${firstName} ${lastName}`);
// Output: Hello harry potter
```

### `process.memoryUsage()`

The `process.memoryUsage()` method returns an object containing information about the memory usage of the Node.js process. It includes details such as:
- `rss`: Resident Set Size (total memory allocated for the process)
- `heapTotal`: Total size of the allocated heap
- `heapUsed`: Amount of heap used
- `external`: Memory used by C++ objects bound to JavaScript objects
- `arrayBuffers`: Memory allocated for ArrayBuffers

#### Example:
```javascript
const memoryInformation = process.memoryUsage();
console.log(memoryInformation);
```

---

## 🛠️ Practical Examples

### Example 1: Using `process.env` for Environment-Specific Configuration
```javascript
const http = require('http');
const hostname = process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

### Example 2: Parsing Command-Line Arguments with `process.argv`
```javascript
const firstName = process.argv[2];
const lastName = process.argv[3];
console.log(`Hello ${firstName} ${lastName}`);
```

### Example 3: Monitoring Memory Usage with `process.memoryUsage()`
```javascript
const initialMemoryUsage = process.memoryUsage().heapUsed;

for (let i = 0; i <= 10000; i++) {
  // Simulate memory-intensive operation
}

const currentMemoryUsage = process.memoryUsage().heapUsed;
console.log(`Memory usage increased from ${initialMemoryUsage} to ${currentMemoryUsage}`);
```

---

## 🎯 Challenge: Hands-On Practice

### Objective:
Create a new file `index.js` in a folder named `process-object` and complete the following tasks:

1. Use `process.memoryUsage()` to log initial and final memory usage.
2. Use `process.argv` to retrieve and display your name.
3. Use `process.env` to log the current environment mode.

#### Starter Code:
```javascript
const initialMemoryUsage = // TODO 1
const yourName = // TODO 2
const environment = // TODO 3

for (let i = 0; i <= 10000; i++) {
  // Simulate memory-intensive operation
}

const currentMemoryUsage = // TODO 4

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
