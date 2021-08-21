import React, { useState } from "react";
import "antd/dist/antd.css";
import TodoContainer from "./components/todo/TodoContainer";
import { LoginForm } from "components/common/LoginForm";

function App() {
  const [user, setUser] = useState<string>("");
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const configUser = (id: string, password: string) => {
    //CONFIG USER APICALL
    //IF SUCCESS
    return true;
    //IF FALSE
    //return false;
  };

  const submitLoginForm = (id: string, password: string) => {
    if (configUser(id, password)) {
      setUser(id);
      setIsLogged(true);
    }
  };

  const userLogout = () => {
    setUser("");
    setIsLogged(false);
  };

  return (
    <>
      {isLogged ? (
        <TodoContainer user={user} logout={userLogout} />
      ) : (
        <LoginForm configUser={submitLoginForm} />
      )}
    </>
  );
}

export default App;
