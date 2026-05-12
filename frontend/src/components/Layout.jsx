import { useState } from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 w-full">
        <Navbar setIsOpen={setIsOpen} />

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
