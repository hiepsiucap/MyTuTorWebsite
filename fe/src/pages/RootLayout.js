/** @format */

import { Footer, NavBar, Sidebar } from "../components";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <section className=" bg-background">
      <Sidebar></Sidebar>
      <NavBar></NavBar>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </section>
  );
};
export default RootLayout;
