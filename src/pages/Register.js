import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";

export default function Register() {
  const { name, setname } = useState("");
  const { email, setemail } = useState("");
  const { password, setpassword } = useState("");
  const { cpassword, setcpassword } = useState("");

  const dispatch = useDispatch();
  function register() {
    if (password !== cpassword) {
      alert("Please enter correct password");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
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
            REGISTER
          </h1>
          <div>
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              value={name}
              required
              onChange={(e) => {
                setname(e.target.value);
              }}
              style={{ marginTop: "10px", boxShadow: "none" }}
            />
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
            <Button
              onClick={register}
              style={{
                borderRadius: "50%",
                backgroundColor: "teal",
                borderColor: "black",
                color: "white",
                marginTop: "20px",
              }}
            >
              REGISTER
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
