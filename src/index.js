// this should be named index.js because web pack expects entry point to be index.js
// React and React dom were installed using npm
import React from "react";
import ReactDom from "react-dom/client";

// component name must start with a capital letter

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  // ES line help find what we are not supposed to do const x = "jonas";
  // we nested component Pizza inside App component
  // never nest function declarations but always declare all the components in the top level
  // in order to reuse pizza we can have same repeated 3 times
  // we can call each piece of UI multiple times in order to  reuse it
  return (
    <div>
      <h1> Hello React </h1>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

//all images  and assets go into public and the module bundler automatically get s it from there
// we have to mention alt prop otherwise it shows warning
function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
      <h2>Pizza Spinaci</h2>
      <p>ingredients: "Tomato, mozarella, spinach, and ricotta cheese"</p>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));

// render app after react 18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* 
-in order to activate strict mode we wrap it aroun the app.
- strict mode is nothing but during development model it renders components twice in order to 
find certain bugs and 
react checking if we are using any outdated parts of the react api.
*/

// before react 18
/*"
import React from "react"
import ReactDom from "react-dom"
ReactDOM.render(<App />, document.getElementById("root"))
 */
/*
- check if server is started or not
- hard reload browser because hmr may break
*/
