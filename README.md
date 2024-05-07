# AUTOHACK IDLE
_An incremental game for lazy coders_

## Setup
Follow these steps to get the project up and running. _Note: This is a work in progress, and more detail will be added_

1. Install Visual Studio Code
1. Install the latest versions of Git, Node.js, and npm
1. Clone this repository locally through VS Code
1. Install the Prettier extension (it should appear as recommended)
1. Create a MongoDB database with [Atlas](https://www.mongodb.com/cloud/atlas/register) and get a connection string
1. Rename the **.env-example** file to **.env**
1. In the **.env** file, update the `MONGO_URI` variable to point to the MongoDB connection string
1. Run `npm install` in the root directory
1. Run `npm install` in the **frontend/** directory
1. Run `npm run dev` in the root directory

## Sources
Boiler-plate starter code was taken from these repositories:

- [MERN Authentication Starter - Brad Traversy](https://github.com/bradtraversy/mern-auth)
- [Phaser React TypeScript Template](https://github.com/phaserjs/template-react-ts)

## Learning
[Refs in React](https://react.dev/learn/manipulating-the-dom-with-refs)
[`forwardRef` in React](https://www.youtube.com/watch?v=-vw6uG1JSEA)

