import { useState } from "react";

import { filterTodo } from "store";

function useFilter() {
  const [active, setActive] = useState<string>("all");
  const [textFilter, setTextFilter] = useState<string>("все");

  const filterItems = [
    {
      id: 1,
      name: "Все",
      code: "all",
      onClick: () => {
        filterTodo("Все");
        setActive("all");
        setTextFilter("все");
      },
    },
    {
      id: 2,
      name: "Выполненные",
      code: "completed",
      onClick: () => {
        filterTodo("Выполненные");
        setActive("completed");
        setTextFilter("выполненные");
      },
    },
    {
      id: 3,
      name: "Невыполненные",
      code: "unfulfilled",
      onClick: () => {
        filterTodo("Невыполненные");
        setActive("unfulfilled");
        setTextFilter("невыполненные");
      },
    },
  ];

  return { filterItems, textFilter, active };
}

export default useFilter;
