import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";

function DefaultLayout() {
  return (
    <>
      <header>
        <MainNav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h4 className="text-center my-5">Realizzato da Carlos</h4>
      </footer>
    </>
  );
}

export default DefaultLayout;
