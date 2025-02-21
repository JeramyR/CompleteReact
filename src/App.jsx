import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's</h1>
      <Pizza
        name="Pepperoni"
        description="pepperoni"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="Mediterraneo"
        description="mediterranian stuff"
        image={"/public/pizzas/mediterraneo.webp"}
      />
      <Pizza
        name="Hawaiian"
        description="ham and pineapple"
        image={"/public/pizzas/hawaiian.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
