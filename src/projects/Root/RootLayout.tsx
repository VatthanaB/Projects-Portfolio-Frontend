import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main>
        {/* display any children routes here using react router dom with Outlet */}
        <Outlet />
      </main>
    </>
  );
}
