import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";
import { addToCart } from "../actions/cartActions";
import { deleteFromCart } from "../actions/cartActions";
import { Button } from "@material-ui/core";
export default function Cart() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 style={{ color: "purple", fontWeight: "5px" }}>
            Your shopping Basket
          </h1>
          <hr style={{ color: "green" }} />
          {cartItems.map((item) => {
            return (
              <div className="flex-container">
                <div className="text-left m-1 w-100">
                  <h2>
                    {item.name} [{item.varient}]
                  </h2>
                  <h3>
                    Price:{item.quantity}* {item.prices[0][item.varient]}=
                    {item.price}
                  </h3>
                  <h3 style={{ display: "inline" }}>Quantity:</h3>
                  <AddIcon
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity + 1, item.varient)
                      );
                    }}
                    style={{ color: "green", margin: "5px" }}
                  />
                  <b>{item.quantity}</b>
                  <RemoveIcon
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity - 1, item.varient)
                      );
                    }}
                    style={{ color: "red", margin: "5px" }}
                  />
                  <hr />
                </div>
                <div className="m-1 w-100">
                  <img
                    src={item.image}
                    alt=""
                    style={{ height: "80px", width: "80px" }}
                  />
                </div>
                <div className="m-1 w-100">
                  <DeleteIcon
                    onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}
                    style={{ color: "blue", marginTop: "5px" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-4 text-right">
          <h2 style={{ fontSize: "45px" }}>SubTotal:${subtotal}-</h2>
          <Button
            style={{
              borderRadius: "50%",
              backgroundColor: "teal",
              borderColor: "black",
              color: "white",
            }}
          >
            {" "}
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
