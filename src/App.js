import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import EmployeeSignInPage from "./pages/EmployeeSignInPage";
import AdminPage from "./pages/AdminPage";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={EmployeeSignInPage} />
        <Route exact path="/admin" component={AdminPage} />
      </div>
    );
  }
}

export default App;
