import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivatRoute";

const SharedLayout = lazy(() => import("components/SharedLayout/SharedLayout"));
const Main = lazy(() => import("pages/Main"));
const Catalog = lazy(() => import("pages/Catalog"));
const Product = lazy(() => import("pages/Product"));
const Signin = lazy(() => import("pages/Signin"));
const Register = lazy(() => import("pages/Register"));

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        {/* route for SharedLayout */}
        <Route path="/" element={<SharedLayout />}>
          {/* route for Main page */}
          <Route index element={<Main />}></Route>
          {/* route for Catalog */}
          <Route
            path="/catalog/:category"
            element={
              <PrivateRoute component={<Catalog />} redirectTo="/signin" />
            }
          ></Route>
          {/* route for Product Page */}
          <Route
            path="/catalog/:category/:productId"
            element={
              <PrivateRoute component={<Product />} redirectTo="/signin" />
            }
          ></Route>
        </Route>
        {/* route for Sign in */}
        <Route
          path="/signin"
          element={<RestrictedRoute component={<Signin />} redirectTo="/" />}
        ></Route>
        {/* route for Register */}
        <Route
          path="/register"
          element={<RestrictedRoute component={<Register />} redirectTo="/" />}
        ></Route>
      </Routes>
    </Suspense>
  );
};

export default App;
