import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { Contact, Home, Login, Profile, SignUp, SingleImage } from "./pages";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const { user } = useSelector((store) => store.user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "/profile", element: <Profile /> },
        {path:"/contact",element:<Contact/>},
        { path: "/singleimage/:id", element: <SingleImage /> },
      ],
    },
    { path: "/login", element: user ? <Navigate to="/" /> : <Login /> },
    { path: "/signup", element: user ? <Navigate to="/" /> : <SignUp /> },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
