import React from "react";
import logo from "./logo.svg";
import firebase from "firebase";
import "./App.css";
import { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import LoginProvider from "./Contexts/LoginProvider";
import LoginContext from "./Contexts/LoginContext";
import LoginSignup from "./Pages/LoginSignup";
import CustomBootDialog from "./Components/CustomBootDialog";
import StartApp from "./Pages/StartApp";
import CustomSnackbar from "./Components/CustomSnackbar";
function App() {
  const {
    state: { loginInfo }
  } = useContext(LoginContext);
  return (
    <div className="App">
      <LoginProvider>
        <CustomBootDialog />
        <CustomSnackbar />
        <Router>
          <Route
            path="/signup"
            exact={true}
            component={() => {
              return <LoginSignup page="signup" />;
            }}
          />
          <Route
            path="/login"
            exact={true}
            component={() => {
              return <LoginSignup page="login" />;
            }}
          />
          <Route path="/" exact={true} component={StartApp} />
          {/* <PrivateRoute
            path={"/main/" + localStorage.getItem("city")}
            exact="true"
            component={MainPage}
          /> */}
          {/* <PrivateRoute
            path={
              "/main/" +
              localStorage.getItem("city") +
              "/movies/bookTickets/:id/:type"
            }
            component={MovieDesc}
          /> */}

          {/* <PrivateRoute
            path={"/main/" + localStorage.getItem("city") + "/movies"}
            exact="true"
            component={AllMovies}
          />
          <PrivateRoute
            path={"/main/" + localStorage.getItem("city") + "/plays"}
            exact="true"
            component={AllPlays} */}
          {/* /> */}
          <Route path="/:type/:function" exact="true" component={MainPage} />
        </Router>
      </LoginProvider>
    </div>
  );
}
function LoginWrapper(props) {
  const {
    state: { loginInfo },
    actions: { setLoginDetails, getUserDetails }
  } = useContext(LoginContext);

  let isMounted = false;
  useEffect(() => {
    if (!isMounted) {
      isMounted = true;
      var city = localStorage.getItem("city");
      console.log(city);

      firebase.auth().onAuthStateChanged(
        user => {
          if (user) {
            if (city)
              setLoginDetails({ city: city, isLoggedIn: true, user: user });
            else {
              setLoginDetails({ ...loginInfo, isLoggedIn: true, user: user });
            }
          } else {
            if (city)
              setLoginDetails({ city: city, isLoggedIn: false, user: null });
            else {
              setLoginDetails({ ...loginInfo, isLoggedIn: true, user: user });
            }
          }
        },
        error => {}
      );
    }
  }, []);
  console.log("called");
  // if (loginInfo && loginInfo.city !== null) {
  return <Redirect to={"/"} />;
  // } else {
  //   if (loginInfo.city === null) {
  //     // return <City />;
  //   }
  // }
  // return <Redirect to={"/main/" + loginInfo.city} />;
}
function PrivateRoute({ component: Component, ...rest }) {
  const {
    state: { loginInfo }
  } = useContext(LoginContext);
  return (
    <Route
      {...rest}
      render={props => {
        if (loginInfo.city === null) {
          return <Redirect to="/" />;
        }
        return <Component {...props} />;
      }}
    />
  );
}

export default App;
