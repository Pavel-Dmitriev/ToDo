import { Outlet } from "react-router-dom";

import Header from "components/Header";

function Root() {
  return (
    <div className="flex h-[100vh] flex-col">
      <Header />
      <main className="will-change-width flex flex-1 overflow-hidden ">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
