import React, {
  useState,
  useContext,
  FormEvent,
  useReducer,
  useEffect
} from "react";
import { Link, Redirect } from "react-router-dom";
import LoginContext from "../Contexts/LoginContext";
// import LoginContext from "../Contexts/LoginContext";
//  } from "react-router-dom";
export default function SignupComponent(props: any) {
  const {
    state: { loginInfo },
    actions: { signUp }
  } = useContext<any>(LoginContext);
  const [deptList, setDeptList] = useState([
    "Department1",
    "Department2",
    "Department3",
    "Department4"
  ]);
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [rPassword, setRPassword] = useState();
  const [department, setDepartment] = useState();
  const [error, setError] = useState<{ type: any; error_message: any }>({
    type: null,
    error_message: null
  });
  // const [userState, dispatch] = useReducer(userReducer, []);
  // useEffect(() => {
  //   //console.log(userState);
  // }, [userState]);
  const formSubmit = async (e: FormEvent) => {
    //console.log("here");
    e.preventDefault();
    if (email == null || password == null) {
      //
    } else {
      if (password !== rPassword) {
        alert("password and alert password do not match");
      } else {
        //final signup
        // props.onCreateUser(
        //console.log("here");
        // let user = {
        //   userName: userName,
        //   email: email,
        //   name: name,
        //   department: department,
        //   password: password
        // };

        await signUp(email, password);
        //console.log();
        // );
      }
    }
  };

  return (
    <div>
      <div className="basic-form">
        {/* <h2 className="">Register</h2> */}
        <form
          onSubmit={e => {
            formSubmit(e);
          }}
        >
          <div className="input-group mb-3">
            <input
              type="email"
              name="email"
              onChange={e => {
                setEmail(e.target.value);
              }}
              className="form-control"
              placeholder="Email-Id"
            />
          </div>

          <div className="input-group mb-3">
            <input
              type="password"
              name="password"
              id="password"
              onChange={e => {
                setPassword(e.target.value);
              }}
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              name="rPassword"
              onChange={e => {
                setRPassword(e.target.value);
              }}
              className="form-control"
              placeholder="Repeat Password"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={formSubmit}
          >
            Register
          </button>
        </form>
        <Link to="/login" className="hyperlink">
          Login
        </Link>
      </div>
      {loginInfo.isLoggedIn && <Redirect to={"/movies/show"} />}
    </div>
  );
}
