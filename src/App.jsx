// React
import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "./Context/Context";
// Pages
import Home from "./Pages/Home";
import MyAccount from "./Pages/MyAccount";
import MyOrder from "./Pages/MyOrder";
import MyOrders from "./Pages/MyOrders";
import SingIn from "./Pages/SignIn";
import NotFound from "./Pages/NotFound";
// Components
import Navbar from "./Components/Navbar";
import CheckoutSideMenu from "./Components/CheckoutSideMenu/CheckoutSideMenu";
// Style
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sing-in", element: <SingIn /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
