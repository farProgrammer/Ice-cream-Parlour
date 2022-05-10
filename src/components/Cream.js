import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core/";
import { addToCart } from "../actions/cartActions";
export default function Cream({ flavours }) {
  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("small");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  function addtocart() {
    dispatch(addToCart(flavours, quantity, varient));
  }
  return (
    <div
      style={{ margin: "70px" }}
      className="shadow-lg p-3 mb-5 bg-danger rounded"
    >
      <div onClick={handleShow}>
        <h2 className="" style={{ fontSize: "20px", backgroundColor: "plum" }}>
          {flavours.name}
        </h2>
        <img
          src={flavours.image}
          alt=""
          className="img-fluid"
          style={{ height: "200px", width: "200px" }}
        />
      </div>
      <div className="flex-container" style={{ display: "flex" }}>
        <div className=" m-1 w-100">
          <p>Varients</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setvarient(e.target.value);
            }}
            style={{ boxShadow: "none", borderColor: "blue" }}
          >
            {flavours.varient.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
            ;
          </select>
        </div>
        <div className=" m-1 w-100">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container" style={{ display: "flex" }}>
        <div className="m-1">
          <h8 className="mt-1">
            {" "}
            Price:{flavours.prices[0][varient] * quantity}
          </h8>
        </div>
        <div className="m-1 w-100">
          <button
            className="btn"
            onClick={addtocart}
            style={{
              backgroundColor: "teal",
              color: "white",
              borderRadius: "50%",
            }}
          >
            {" "}
            ADD TO CART
          </button>
        </div>
      </div>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title style={{ backgroundColor: "plum" }}>
            {" "}
            {flavours.name}
          </Modal.Title>
          <p style={{ backgroundColor: "yellow" }}>{flavours.description}</p>
        </Modal.Header>

        <Modal.Body style={{ fontSize: "20px", backgroundColor: "red" }}>
          <img
            src={flavours.image}
            alt=""
            className="img-fluid"
            style={{ height: "300px", width: "300px" }}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ backgroundColor: "teal", color: "white" }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
