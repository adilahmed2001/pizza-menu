// this should be named index.js because web pack expects entry point to be index.js
// React and React dom were installed using npm
import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
// web pack responsibility to read css and inject into the app
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
  // in jsx we have to use className instead of class because class is already a reserved keyword in js
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// for inline styles we have to defineit using java script object, in style attribute if html
//{} braces to enter javascript mode and inside curly base is to define object. (in html we just need to write the styeles in '' but with jsx it should be a javascript object)
// in css font-size, in jsx fontSize
// all the css attributes are converted to camel case notation in jsx

function Header() {
  const header_style = {
    color: "red",
    fontSize: "42px",
    textTransform: "uppercase",
  };

  /* return (
    <h1 style={{ color: "red", fontSize: "42px", textTransform: "uppercase" }}>
      Fast React Pizza Co.
    </h1>
  );*/

  //return <h1 style={header_style}>Fast React Pizza Co.</h1>;
  return (
    <header className="header">
      {" "}
      <h1> Fast React Pizza Co.</h1>{" "}
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="ingredients: Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
    </main>
  );
}
// we are sending price as string to give it as price just enter java script mode
// we can also write these functions like function expressions and arrow functions like const Test = ()=>

//all images  and assets go into public and the module bundler automatically get s it from there
// we have to mention alt prop otherwise it shows warning
function Pizza(props) {
  console.log(props);
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div>
    </div>
  );
}

function Footer() {
  // null here is props
  //return React.createElement("footer", null, "were currenlty open!");
  // {} power of combingng java script into the html
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 24;
  // we get alert twice because we are using strict mode and strict mode react renders components twice.

  /*if (hour >= openHour && hour <= closeHour) {
    alert("We're Currently Open!");
  } else {
    alert("Sorry We're Closed.");
  }*/

  // console.log here executed twice ue to strict mode
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currenlty open
    </footer>
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
