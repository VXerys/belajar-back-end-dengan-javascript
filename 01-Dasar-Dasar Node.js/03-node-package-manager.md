# Node Package Manager (NPM) Documentation 📦

## Table of Contents 
- [Node Package Manager (NPM) Documentation 📦](#node-package-manager-npm-documentation-)
  - [Table of Contents 📑](#table-of-contents-)
  - [Introduction to NPM 🚀](#introduction-to-npm-)
  - [Installing and Managing Packages 📥](#installing-and-managing-packages-)
  - [Global vs Local Installation 🌍 vs 📁](#global-vs-local-installation--vs-)
  - [Using MomentJS ⏰](#using-momentjs-)
  - [Package.json and Dependencies 📄](#packagejson-and-dependencies-)
  - [Uninstalling Packages 🗑️](#uninstalling-packages-️)
  - [Running Scripts with NPM 🏃‍♂️](#running-scripts-with-npm-️)
  - [Practical Exercise: Using Lodash 🛠️](#practical-exercise-using-lodash-️)
  - [References 📚](#references-)

---

## Introduction to NPM 🚀

In modern application development, the industry heavily relies on external modules or packages to accelerate the development process. As applications grow in complexity, the number of modules or packages used also increases. This is where a **Package Manager** becomes essential.

**Node Package Manager (NPM)** is the default package manager for JavaScript, designed to simplify the management of packages available on [npmjs.com](https://www.npmjs.com/). NPM is automatically installed when you install **Node.js** on your computer. It can be operated via Command Line Interface (CLI) or Terminal, and you’ve likely already used it when creating JavaScript projects.

NPM is not just for creating JavaScript projects; it also allows you to install or remove third-party modules. Modules installed via NPM are stored in the `node_modules` folder.

[🔝 Back to Table of Contents](#table-of-contents)

---

## Installing and Managing Packages 📥

NPM simplifies the process of installing and managing third-party modules. To install a package, you use the following command:

```bash
npm install <package-name>
```

For example, to install the popular **MomentJS** library, you would run:

```bash
npm install moment
```

Once installed, you can use the module in your Node.js project by requiring it:

```javascript
const moment = require('moment');
const date = moment().format("MMM Do YY");
console.log(date);
```

This will output the current date in the specified format.

[🔝 Back to Table of Contents](#table-of-contents)

---

## Global vs Local Installation 🌍 vs 📁

There are two types of installations in NPM: **global** and **local**.

- **Global Installation**: The module is installed system-wide and can be used anywhere on your machine. This is similar to core modules.
  
  ```bash
  npm install -g <package-name>
  ```

- **Local Installation**: The module is installed within the scope of a specific Node.js project and can only be used within that project.

  ```bash
  npm install <package-name>
  ```

**Recommendation**: It’s highly recommended to install third-party modules locally to avoid potential issues. If you need to run a Node.js package globally, use **npx** instead.

[🔝 Back to Table of Contents](#table-of-contents)

---

## Using MomentJS ⏰

**MomentJS** is a popular third-party module for managing dates and times in Node.js. After installing it locally, you can use it in your project as shown earlier. Here’s another example:

```javascript
const moment = require('moment');
const date = moment().add(7, 'days').format("MMM Do YY");
console.log(date);
```

This will output the date one week from today.

[🔝 Back to Table of Contents](#table-of-contents)

---

## Package.json and Dependencies 📄

When you install a package locally, it is recorded in the `package.json` file under the `dependencies` object. This file is crucial for sharing your project with others, as it lists all the third-party modules required for the project.

Example `package.json`:

```json
{
  "name": "nodejs-basic",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "moment": "^2.29.4"
  }
}
```

To install all dependencies listed in `package.json`, simply run:

```bash
npm install
```

[🔝 Back to Table of Contents](#table-of-contents)

---

## Uninstalling Packages 🗑️

To remove a third-party module, use the following command:

```bash
npm uninstall <package-name>
```

For example, to uninstall **MomentJS**:

```bash
npm uninstall moment
```

This will remove the module from your `node_modules` folder and update the `package.json` file.

[🔝 Back to Table of Contents](#table-of-contents)

---

## Running Scripts with NPM 🏃‍♂️

NPM can also function as a script runner. You can define scripts in the `scripts` object within `package.json` to create shortcuts for running Node.js processes.

Example `package.json` scripts:

```json
"scripts": {
  "start-dev": "NODE_ENV=development node app.js",
  "start": "NODE_ENV=production node app.js"
}
```

To run a script, use the following command:

```bash
npm run <script-name>
```

For example, to run the `start-dev` script:

```bash
npm run start-dev
```

[🔝 Back to Table of Contents](#table-of-contents)

---

## Practical Exercise: Using Lodash 🛠️

Let’s practice by installing and using the **Lodash** library.

1. Create a new folder named `node-package-manager` and add an `index.js` file inside it.
2. Install **Lodash**:

   ```bash
   npm install lodash
   ```

3. In `index.js`, write the following code:

   ```javascript
   const _ = require('lodash');
   const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);
   console.log(myOddEvenArray);
   ```

4. Run the file:

   ```bash
   node ./node-package-manager/index.js
   ```

The output will be:

```bash
[[1, 3, 5], [2, 4, 6]]
```

[🔝 Back to Table of Contents](#table-of-contents)

---

## References 📚

- [NPM Official Website](https://www.npmjs.com/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [MomentJS Documentation](https://momentjs.com/docs/)
- [Lodash Documentation](https://lodash.com/docs/)

[🔝 Back to Table of Contents](#table-of-contents)
