import React from "react";
import "./App.css";
import EmployeeSignInPage from "./pages/EmployeeSignInPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <div className="App">
      <EmployeeSignInPage />
      <AdminPage />
    </div>
  );
}

export default App;
