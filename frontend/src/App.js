import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";

import OrderScreen from "./screens/OrderScreen";
import OrderListScreen from "./screens/OrderListScreen";

import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";

import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";

const App = () => {
  // Alert user that website is not real.
  const [giveWarning, setGiveWarning] = useState(true);

  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route
            path="/admin/productlist"
            component={ProductListScreen}
            exact
          />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
          <Route path="/admin/orderlist" component={OrderListScreen} />
          <Route path="/search/:keyword" component={HomeScreen} exact />{" "}
          {/*  Product Pagination */}
          <Route path="/page/:pageNumber" component={HomeScreen} />{" "}
          {/* pagination on home screen to take us to different pages */}
          <Route
            path={
              "/search/:keyword/page/:pageNumber" /* ( when user searches for keyword, and goes to clicks page 2) */
            }
            component={HomeScreen}
          />
          <Route
            path="/admin/productlist/:pageNumber"
            component={ProductListScreen}
            exact
          />
          {/* // --------------------------------- */}
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />

      {giveWarning
        ? alert(
            "PLEASE NOTE: This website is not a real business, any purchases, orders etc. will not be processed."
          ) && setGiveWarning(false)
        : ""}
    </Router>
  );
};

export default App;
