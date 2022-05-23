import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";
const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("../Auth/Login"));
const SignUp = lazy(() => import("../Auth/SignUp"));
const RouteVal = (data) => {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </Router>
      </Suspense>
    </Provider>
  );
};
export default RouteVal;
