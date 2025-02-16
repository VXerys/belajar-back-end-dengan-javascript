
# 📝 Writable Streams in Node.js: A Comprehensive Guide

Welcome to this detailed guide on **Writable Streams** in Node.js! 🌟 In this documentation, we'll explore how to use writable streams to write data to files, combine them with readable streams, and create efficient file-handling programs. Whether you're a beginner or an experienced developer, this guide will provide you with in-depth explanations, practical examples, and useful tips.

---

## 📑 Table of Contents

- [📝 Writable Streams in Node.js: A Comprehensive Guide](#-writable-streams-in-nodejs-a-comprehensive-guide)
  - [📑 Table of Contents](#-table-of-contents)
  - [🚀 Introduction to Writable Streams](#-introduction-to-writable-streams)
  - [🛠️ Creating a Writable Stream](#️-creating-a-writable-stream)
    - [Key Points:](#key-points)
  - [✍️ Writing Data to a Writable Stream](#️-writing-data-to-a-writable-stream)
    - [Output in `output.txt`:](#output-in-outputtxt)
    - [Notes:](#notes)
  - [🔄 Combining Readable and Writable Streams](#-combining-readable-and-writable-streams)
    - [Example:](#example)
    - [Explanation:](#explanation)
  - [🏋️ Practical Exercise: Stream Manipulation](#️-practical-exercise-stream-manipulation)
    - [Steps:](#steps)
  - [📚 References \& Additional Resources](#-references--additional-resources)
    - [🔝 Back to Table of Contents](#-back-to-table-of-contents)

---

## 🚀 Introduction to Writable Streams

In the previous module, we learned about **Readable Streams**, which allow us to read data from a source (like a file) in chunks. But did you know that Node.js also supports **Writable Streams**? 🖋️ Writable streams are used to write data to a destination, such as a file, in a memory-efficient manner.

Writable streams are particularly useful when dealing with large datasets, as they allow you to process and write data incrementally, avoiding memory overload. In this guide, we'll focus on using writable streams to write data to files.

---

## 🛠️ Creating a Writable Stream

To create a writable stream in Node.js, we use the `createWriteStream()` method from the `fs` (file system) core module. This method takes one argument: the file path where the data will be written.

```javascript
const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');
```

### Key Points:
- If the file does not exist, it will be created automatically. 🆕
- If the file already exists, its contents will be overwritten. ⚠️ Be careful!

---

## ✍️ Writing Data to a Writable Stream

Once you've created a writable stream, you can write data to it using the `write()` method. To signal the end of the stream, use the `end()` method.

```javascript
const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');

writableStream.write('This is the first line of text!\n');
writableStream.write('This is the second line of text!\n');
writableStream.end('End of the writable stream!');
```

### Output in `output.txt`:
```
This is the first line of text!
This is the second line of text!
End of the writable stream!
```

### Notes:
- The `end()` method can also be used to write the final piece of data before closing the stream.
- Always call `end()` to properly close the stream and ensure all data is written.

---

## 🔄 Combining Readable and Writable Streams

One of the most powerful features of Node.js streams is the ability to combine **readable** and **writable streams**. This allows you to read data from a source, process it, and write it to a destination seamlessly.

### Example:
Let's create a program that reads text from `input.txt`, processes it in chunks, and writes the modified text to `output.txt`.

```javascript
const fs = require('fs');
const path = require('path');

const inputFilePath = path.resolve(__dirname, 'input.txt');
const outputFilePath = path.resolve(__dirname, 'output.txt');

const readableStream = fs.createReadStream(inputFilePath, { highWaterMark: 15 });
const writableStream = fs.createWriteStream(outputFilePath);

readableStream.on('data', (chunk) => {
    writableStream.write(chunk.toString() + '\n');
});

readableStream.on('end', () => {
    writableStream.end();
});
```

### Explanation:
- The `highWaterMark` option in `createReadStream()` specifies the size of each chunk (in bytes).
- Each chunk is written to `output.txt`, followed by a newline character (`\n`).

---

## 🏋️ Practical Exercise: Stream Manipulation

Let's put your knowledge into practice! 🧠 Follow these steps to create a program that reads and writes text using streams.

### Steps:
1. Create a new folder named `stream`.
2. Inside the folder, create two files: `index.js` and `input.txt`.
3. Add the following content to `input.txt`:
   ```
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
   ```
4. Write the following code in `index.js`:
   ```javascript
   const fs = require('fs');
   const path = require('path');

   const inputFilePath = path.resolve(__dirname, 'input.txt');
   const outputFilePath = path.resolve(__dirname, 'output.txt');

   const readableStream = fs.createReadStream(inputFilePath, { highWaterMark: 15 });
   const writableStream = fs.createWriteStream(outputFilePath);

   readableStream.on('data', (chunk) => {
       writableStream.write(chunk.toString() + '\n');
   });

   readableStream.on('end', () => {
       writableStream.end();
   });
   ```
5. Run the program using the command:
   ```
   node ./stream/index.js
   ```
6. Check the newly created `output.txt` file for the processed text.

---

## 📚 References & Additional Resources

Here are some additional resources to deepen your understanding of streams in Node.js:

- [Node.js Documentation on Streams](https://nodejs.org/api/stream.html)
- [Understanding Streams in Node.js](https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/)
- [Node.js File System Module](https://nodejs.org/api/fs.html)

---

### 🔝 [Back to Table of Contents](#table-of-contents)