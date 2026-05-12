import { HiMenu } from "react-icons/hi";
import { useNavigate } from "react-router";

function Navbar({ setIsOpen }) {

  const navigate = useNavigate();

  // Logout Function

  const handleLogout = () => {

    navigate("/login");

  };

  return (

    <div className="h-16 bg-white shadow-sm flex items-center justify-between px-6 border-b">

      {/* Left */}

      <div className="flex items-center gap-4">

        {/* Hamburger */}

        <button
          onClick={() => setIsOpen(true)}
          className="text-3xl text-slate-700 lg:hidden"
        >
          <HiMenu />
        </button>

        <h2 className="text-xl font-semibold text-slate-700">
          Welcome Back 👋
        </h2>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Avatar */}

        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
          H
        </div>

        {/* Logout Button */}

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;