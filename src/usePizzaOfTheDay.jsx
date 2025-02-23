// Custom hook built for fetching the pizza of the day from the server.
import { useState, useEffect, useDebugValue } from "react";

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

  // this is a hook to see the value of the hook in components tab in dev tools
  useDebugValue(
    pizzaOfTheDay
      ? ` ${pizzaOfTheDay.id} : ${pizzaOfTheDay.name}`
      : "Loading...",
  );

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const res = await fetch("/api/pizza-of-the-day");
      const data = await res.json();
      setPizzaOfTheDay(data);
    }

    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};
