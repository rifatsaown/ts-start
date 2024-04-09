# This is a repository for tracking the learning of TypeScript.

## Table of Contents
- [TypeScript](#typescript)
- [Installation](#installation)
- [Usage](#usage)

## TypeScript
TypeScript is a superset of JavaScript that adds optional static types to the language. TypeScript is designed for the development of large applications and can be used to develop JavaScript applications for both client-side and server-side execution.

## Installation
To install TypeScript, you need to have Node.js installed. You can install TypeScript using npm, the Node.js package manager. Open a terminal window and run the following command:
```bash
npm install -g typescript # Install TypeScript globally

tsc --version # Verify the installation

# install ts-node to run TypeScript files directly
npm install -g ts-node # Install ts-node globally

ts-node --version # Verify the installation

# install typescript locally in a project
npm install typescript --save-dev # Install TypeScript locally

# install ts-node locally in a project
npm install ts-node --save-dev # Install ts-node locally

```

## Usage
To compile a TypeScript file, use the `tsc` command followed by the name of the TypeScript file. For example, to compile a file named `app.ts`, run the following command:
```bash
tsc app.ts
```
This will generate a JavaScript file named `app.js` that you can run using Node.js or in a browser.
```