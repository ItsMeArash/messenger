import React from 'react';
import Login from './Components/Login';

import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;