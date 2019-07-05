import * as React from "react";
import { Link, Redirect } from "react-router-dom";
import { useContext, useState } from "react";
import LoginContext from "../Contexts/LoginContext";

export default function LoginComponent(props: any) {
  const {
    state: { loginInfo },
    actions: { login }
  } = useContext<any>(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //console.log(email, password);
    await login(email, password);
  };
  return (
    <div>
      <div className="basic-form">
        <form
          onSubmit={(e: React.FormEvent) => {
            formSubmit(e);
          }}
        >
          <div className="input-group mb-3">
            <input
              type="email"
              name="email"
              // value="pragya.deep19@gmail.com"
              onChange={e => {
                setEmail(e.currentTarget.value);
              }}
              className="form-control"
              placeholder="Email-Id"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              name="password"
              // value="123456"
              onChange={e => {
                setPassword(e.currentTarget.value);
              }}
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            // onCLick={async () => {
            //   await login(email, password);
            //   console.log(loginInfo);
            // }}
          >
            Login
          </button>
        </form>
        <Link to="/signup" className="hyperlink">
          Register
        </Link>
      </div>
      {loginInfo.isLoggedIn && (
        <Redirect to={"/main/" + localStorage.getItem("city")} />
      )}
    </div>
  );
}
