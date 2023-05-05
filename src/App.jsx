import React from "react";

import Login from "./Components/Login";
import Chats from "./Components/Chats"
import { Switch, Route } from "react-router-dom";

import AuthContextProvider from "./contexts/AuthContextProvider";
function App() {
  return (
    <div>
      <AuthContextProvider>
        <Switch>
          <Route path="/chats" component={Chats} />
          <Route path="/" component={Login} />
        </Switch>
      </AuthContextProvider>
    </div>
  );
}

export default App;
