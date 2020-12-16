import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import EmployeeSignInPage from "./pages/EmployeeSignInPage";
import AdminPage from "./pages/AdminPage";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      console.log(user);
    });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={EmployeeSignInPage} />
          <Route exact path="/admin" component={AdminPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
