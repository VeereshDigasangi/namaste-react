import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {
  RouterProvider,
  Outlet,
  createHashRouter,
  createBrowserRouter,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import ErrorPage from "./components/Error";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass";
const AppLayout = () => {
  return (
    <>
      <Header />
      {/* Outlet used to make dynamic client side routing */}
      <Outlet />
      <Footer />
    </>
  );
};

//create routing
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <Cart />,
      },

      {
        path: "restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
