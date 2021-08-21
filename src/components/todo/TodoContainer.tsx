import { useTodo } from "./TodoService";
import TodoTemplate from "./template/TodoTemplate";
import TodoHead from "./template/head/TodoHead";
import TodoList from "./template/list/TodoList";
import TodoCreate from "./template/create/TodoCreate";
import TodoFooter from "./template/footer/TodoFooter";


interface TodoContainerProps {
  user: string;
  logout: ()=>void;
}

const TodoContainer = ({user, logout}:TodoContainerProps) => {
  const {
    todoState,
    nextIdState,
    incrementNextId,
    stateHadleTodo,
    removeTodo,
    createTodo,
  } = useTodo(user);
  
  return (
    <>
      <TodoTemplate>
        <TodoHead user={user} logout={logout} />
        <TodoCreate
          nextId={nextIdState}
          createTodo={createTodo}
          incrementNextId={incrementNextId}
        />
        <TodoList
          toggleTodo={stateHadleTodo}
          removeTodo={removeTodo}
          todos={todoState}
        />
        <TodoFooter todos={todoState} />
      </TodoTemplate>
    </>
  );
};

export default TodoContainer;
