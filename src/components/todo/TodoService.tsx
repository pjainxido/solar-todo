import { useState, useEffect } from "react";

// eslint-disable react-hooks/exhaustive-deps
export type Itodo = {
  id: number;
  text: string;
  state: number;
  deadLine: string| null;
};

let initialTodos: Itodo[] = [];

export const useTodo = () => {
  const [todoState, setTodoState] = useState(initialTodos);
  const [nextIdState, setNextIdState] = useState(0);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
    console.log(todoState);
  }, [todoState]);

  const incrementNextId = () => {
    setNextIdState((prev) => prev + 1);
  };

  // const toggleTodo = (id: number) => {
  //   //@TODO
  //   setTodoState((prev) => {
  //     const matchIndex = prev.findIndex((item) => item.id === id);
  //     prev[matchIndex].done = !prev[matchIndex].done;
  //     return [...prev];
  //   });
  // };

  const toggleTodo = (id: number) => {
    setTodoState((prev) => {
      const matchIndex = prev.findIndex((item) => item.id === id);
      prev[matchIndex].state = (prev[matchIndex].state + 1) % 3;
      return [...prev];
    });
  };

  const removeTodo = (id: number) => {
    setTodoState((prevState) => prevState.filter((todo: Itodo) => todo.id !== id));
  };

  const createTodo = (todo: Itodo) => {
    setTodoState((prevState) =>
      prevState.concat({
        ...todo,
        id: nextIdState,
      })
    );
  };

  const loadData = () => {
    let data = localStorage.getItem("todos");
    if (data === undefined) data = "";
    initialTodos = JSON.parse(data || "");
    if (initialTodos && initialTodos.length >= 1) {
      const maxId = Math.max(...initialTodos.map((i) => i.id));
      setNextIdState(maxId + 1);
    }
    setTodoState(initialTodos);
  };

  const saveData = () => {
    localStorage.setItem("todos", JSON.stringify(todoState));
  };

  return {
    todoState,
    nextIdState,
    incrementNextId,
    toggleTodo,
    removeTodo,
    createTodo,
  };
};
