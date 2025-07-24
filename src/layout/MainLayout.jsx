import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <main className="grow" >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
