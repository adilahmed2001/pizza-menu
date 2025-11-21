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

// react expects a key element to optimize list rendering
// we use map method as it returns array and react knows how to render them
function Menu() {
  // do not render if we do not have any pizzas
  const pizzas = pizzaData;
  //const pizzas = 0;
  const pizzaCount = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {
        // true and false do not render hence pizzaCount > 0 if we only use pizzaCount react will render the number 0 as output if no pizzas are present
        //pizzaCount > 0 &&

        pizzaCount > 0 ? (
          /*<p>
        Authentic Italian Cuisine. 6 creative dishes to chose from. All from out
        stone oven, all delicious.
      </p>
      JSX elements must have one parent element
      A piece of JSX no matter werever defined must have only one root element
      */
          // fragement is using <> </>, html renders p seperately in this case not wrapped with anything
          // if we want to pass a key for example inlist we can use React.Fragment
          <React.Fragment>
            <p>
              Authentic Italian Cuisine. 6 creative dishes to chose from. All
              from out stone oven, all delicious.
            </p>

            <ul className="pizzas">
              {" "}
              {pizzas.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name} />
              ))}{" "}
            </ul>
          </React.Fragment>
        ) : null
      }

      {/*<Pizza
        name="Pizza Spinaci"
        ingredients="ingredients: Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />*/}
    </main>
  );
}
// we are sending price as string to give it as price just enter java script mode
// we can also write these functions like function expressions and arrow functions like const Test = ()=>

//all images  and assets go into public and the module bundler automatically get s it from there
// we have to mention alt prop otherwise it shows warning
// use destructuring for props
//function Pizza(props) {

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  //if (props.pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  // null here is props
  //return React.createElement("footer", null, "were currenlty open!");
  // {} power of combingng java script into the html
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  // we get alert twice because we are using strict mode and strict mode react renders components twice.

  /*if (hour >= openHour && hour <= closeHour) {
    alert("We're Currently Open!");
  } else {
    alert("Sorry We're Closed.");
  }*/

  // console.log here executed twice ue to strict mode
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  /*return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currenlty open
    </footer>
  );*/
  // short circuiting is if first part is falsy the secind part wont even execute
  // order only if opened
  /*if (!isOpen) {
    return <p>Closed</p>;
  }*/

  return (
    <footer className="footer">
      {
        /*isOpen && (
        <div className="order">
          <p>We're Open until {closeHour}:00. Come visit us or order online.</p>
          <button className="btn">order</button>
        </div>
      )*/

        isOpen ? (
          <Order openHour={openHour} closeHour={closeHour} />
        ) : (
          <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00.
          </p>
        )
      }
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're Open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online.
      </p>
      <button className="btn">order</button>
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
