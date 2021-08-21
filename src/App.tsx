import React, { useState } from "react";
import "antd/dist/antd.css";
import Spinner from "./components/common/Spinner";
import TodoContainer from "./components/todo/TodoContainer";
import { UserOutlined } from "@ant-design/icons";
import { LoginForm } from "components/common/LoginForm";

function App() {
  //@TODO login
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
    setIsLogged(true);
    if (configUser(id, password)) {
      setUser(id);
    }
  };

  const userLogout = () => {
    setUser("");
    setIsLogged(false);
  };

  const RenderLayout = (
    <div>
      <TodoContainer user={user} logout={userLogout} />
    </div>
  );


  // return isLogged ? RenderLayout : <Spinner mask />;
  return isLogged ? RenderLayout : <LoginForm configUser={submitLoginForm} />;
}

export default App;
