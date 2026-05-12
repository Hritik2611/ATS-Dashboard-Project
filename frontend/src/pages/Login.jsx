import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
   const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/dashboard")
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-slate-900">

      {/* Background blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-[-60px] right-[-60px] w-72 h-72 bg-indigo-500 rounded-full opacity-20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400 rounded-full opacity-10 blur-3xl" />

      <div className="w-full max-w-sm bg-white/10 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-white/20 relative z-10">

        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Sign In
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required 
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition"
          />

          <button
            type="submit"
            className="mt-2 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white py-3 rounded-xl font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/40"
          >
            Sign In
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;