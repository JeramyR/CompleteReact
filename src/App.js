const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pizza, {
      name: "Margherita",
      description: "Cheese and Tomato",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni",
      description: "Pepperoni and Cheese",
    }),
    React.createElement(Pizza, {
      name: "Hawaiian",
      description: "Pineapple and Ham",
    }),
    React.createElement(Pizza, {
      name: "Meat Feast",
      description: "Pepperoni, Ham, and Sausage",
    }),
    React.createElement(Pizza, {
      name: "Veggie",
      description: "Mushrooms, Onions, and Peppers",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
