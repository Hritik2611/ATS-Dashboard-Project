import { Link, useLocation } from "react-router";

function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Jobs",
      path: "/jobListing",
    },
    {
      name: "Candidates",
      path: "/candidateListing",
    },
  ];

  return (
    <>
      {/* Overlay */}

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}

      <div
        className={`
          
          fixed lg:static top-0 left-0 z-50
          w-64 min-h-screen bg-slate-900 text-white p-5 border-r border-slate-800
          transform transition-transform duration-300
          
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          
        `}
      >
        {/* Logo */}

        <h1 className="text-2xl font-bold mb-10 text-blue-400">
          ATS Dashboard
        </h1>

        {/* Menu */}

        <div className="flex flex-col gap-3">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`px-4 py-3 rounded-xl transition-all duration-200
                
                ${
                  location.pathname === item.path
                    ? "bg-blue-600"
                    : "hover:bg-slate-800"
                }
                
              `}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
