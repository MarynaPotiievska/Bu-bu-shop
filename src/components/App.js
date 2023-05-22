import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

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
          <Route path="/catalog/:category" element={<Catalog />}></Route>
          {/* route for Product Page */}
          <Route
            path="/catalog/:category/:productId"
            element={<Product />}
          ></Route>
        </Route>
        {/* route for Sign in */}
        <Route path="/signin" element={<Signin />}></Route>
        {/* route for Register */}
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </Suspense>
  );
};

export default App;
