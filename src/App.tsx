import React from "react";
import { Layout } from "./components/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { links } from "./constants/links";
import { Home } from "./views/Home";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={links.HOME} component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
