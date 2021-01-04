import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import EmployeeSignInPage from "./pages/Employee/EmployeeSignInPage";
import ProfilePage from "./pages/Employee/ProfilePage";
import AbsenceRequestPage from "./pages/Employee/AbsenceRequestPage";
import ViewDaysRequestedPage from "./pages/Employee/ViewDaysRequestedPage";
import AdminLogInPage from "./pages/Admin/AdminLogInPage";
import NewEmployeeAccountPage from "./pages/Admin/NewEmployeeAccountPage";
import ViewAllEmployeesDaysRequestedPage from "./pages/Admin/ViewAllEmployeesDaysRequestedPage";

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
          console.log("currentUser from the App component...", this.state);
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
          <Route path="/adminlogin" component={AdminLogInPage} />
          <Route path="/newemployeesignup" component={NewEmployeeAccountPage} />
          <Route
            path="/viewallemployeesvacationdays"
            render={() => (
              <ViewAllEmployeesDaysRequestedPage
                currentUser={this.state.currentUser}
              />
            )}
          />
          <Route
            path="/profile"
            render={() => <ProfilePage currentUser={this.state.currentUser} />}
          />
          <Route
            path="/absence-request"
            component={() => (
              <AbsenceRequestPage currentUser={this.state.currentUser} />
            )}
          />
          <Route
            path="/viewdaysoff"
            render={() => (
              <ViewDaysRequestedPage currentUser={this.state.currentUser} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
