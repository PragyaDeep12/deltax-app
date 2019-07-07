import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import CustomBootDialog from "./Components/CustomBootDialog";
import StartApp from "./Pages/StartApp";
import CustomSnackbar from "./Components/CustomSnackbar";
function App() {
  return (
    <div className="App">
      <CustomBootDialog />
      <CustomSnackbar />
      <Router>
        <Route path="/" exact={true} component={StartApp} />
        <Route path="/:type/:function" exact="true" component={MainPage} />
      </Router>
    </div>
  );
}
export default App;
