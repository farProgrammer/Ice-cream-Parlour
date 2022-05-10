import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const { email, setemail } = useState("");
  const { password, setpassword } = useState("");
  const { cpassword, setcpassword } = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  });
  function login() {
    if (password === cpassword) {
      alert(
        " To  complete login and proceed click on Ice Cream Parlour to go to homepagec"
      );
    } else {
      const currentUser = {
        email,
        password,
      };
      console.log(currentUser);
      //  dispatch(loginUser(user));
    }
  }
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left">
          <h1
            className="text-center m-2"
            style={{
              fontSize: "35px",
              backgroundColor: "purple",
              color: "white",
            }}
          >
            LOG_INFO
          </h1>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="form-control"
              value={email}
              required
              onChange={(e) => {
                setemail(e.target.value);
              }}
              style={{ marginTop: "10px", boxShadow: "none" }}
            />
            <input
              type="text"
              placeholder="Password"
              className="form-control"
              value={password}
              required
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              style={{ marginTop: "10px", boxShadow: "none" }}
            />
            <input
              type="text"
              placeholder="Confirm Password"
              className="form-control"
              value={cpassword}
              required
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
              style={{ marginTop: "10px", boxShadow: "none" }}
            />
            <br />
            <br />
            <Button
              onClick={login}
              style={{
                borderRadius: "50%",
                backgroundColor: "teal",
                borderColor: "black",
                color: "white",
                marginTop: "20px",
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
