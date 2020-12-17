import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import EmployeeSignInPage from "./pages/EmployeeSignInPage";
import AdminPage from "./pages/AdminPage";
import ProfilePage from "./pages/ProfilePage";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log("CURRENT USER IS...", this.state.currentUser);
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={EmployeeSignInPage} />
          <Route path="/admin" component={AdminPage} />
          <Route
            path="/profile"
            render={() => <ProfilePage currentUser={this.state.currentUser} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
