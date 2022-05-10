import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Router>
          <Route exact path="/">
            {" "}
            <Home />
          </Route>
          <Route exact path="/cart">
            {" "}
            <Cart />
          </Route>
          <Route exact path="/register">
            {" "}
            <Register />
          </Route>
          <Route exact path="/login">
            {" "}
            <Login />
          </Route>
        </Router>
      </div>
    </>
  );
}

export default App;
