import React, { Suspense, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import ErrorPage from "./components/Error";
import Cart from "./components/Cart";
import Login from "./components/Login";
import ProfileClass from "./components/ProfileClass";
import { lazy } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

const About = lazy(() => import("./components/About"));
const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <Header />
      {/* Outlet used to make dynamic client side routing */}
      <Outlet />
      <Footer />
    </UserContext.Provider>
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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />,
          </Suspense>
        ),
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
      {
        path: "instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
