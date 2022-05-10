import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import { useSelector, useDispatch } from "react-redux";

export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  return (
    <div style={{ paddingBottom: "50px" }}>
      <nav className="navbar fixed-top navbar-expand-lg p-0 mb-0 navbar-dark bg-dark">
        <a
          className="navbar-brand shadow-lg p-0 mb-0 bg-danger rounded"
          href="/"
        >
          ICE CREAM PARLOUR
          <LocalBarIcon />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cart">
                <ShoppingCartIcon /> {cartstate.cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
