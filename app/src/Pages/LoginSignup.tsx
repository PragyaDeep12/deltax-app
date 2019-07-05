import React, { useState, useEffect } from "react";
import SignupComponent from "../Components/SignupComponent";
import LoginComponent from "../Components/LoginComponent";
import appIcon from "../icons/popcorn.svg";

function LoginSignup(props: any) {
  return (
    <React.Fragment>
      <img src={appIcon} alt="" className="app-icon" />
      <div>
        <span className="app-name">POPCORN</span>
      </div>

      {props.page === "signup" ? <SignupComponent /> : <LoginComponent />}
    </React.Fragment>
  );
}
// const mapPropsToState = createSelector(
//   (state: any) => state.user,
//   user => ({
//     user
//   })
// );
// const mapPropsToAction = {
//   onCreateUser: createUser
// };
// export default connect(
//   mapPropsToState,
//   mapPropsToAction
// )(LoginSignup);
export default LoginSignup;
