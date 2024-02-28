import React, { useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import {
  logIn,
  logOut,
  setUserInfo,
} from "../../state/reducers/authReducer/authReducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSuccess = (response: any) => {
    console.log(response);
    const jwtToken = response.credential;

    const userInfo: any = decodeJWT(jwtToken);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    dispatch(logIn({}));
    dispatch(
      setUserInfo({
        family_name: userInfo.family_name,
        name: userInfo.given_name,
        email: userInfo.email,
      })
    );
    navigate("/postings");
  };

  const onFailure = () => {
    console.error("Google Login failed:");
  };

  const decodeJWT = (jwtToken: any) => {
    try {
      const decodedToken = jwtDecode(jwtToken);
      return decodedToken;
    } catch (error: any) {
      console.error("Error decoding JWT:", error.message);
      return null;
    }
  };

  return (
    <div className="h-[80vh] flex items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <div className="font-semibold text-[20px] mb-3">Login</div>
        <GoogleLogin onSuccess={onSuccess} onError={onFailure} />
      </div>
    </div>
  );
};

export default Login;
