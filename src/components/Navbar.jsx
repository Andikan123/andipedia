import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-300">
  
  {/* TOP BAR */}
  <div className="max-w-7xl mx-auto px-4 h-18 flex items-center justify-between">

    {/* LOGO (LEFT SIDE - BIG ALLOWED) */}
    <Link to="/" className="flex items-center shrink-0">
      <img
        src="/images/nurseridgelogo.png"
        alt="Nurseridge Logo"
        className="h-50 w-auto object-contain"
      />
    </Link>

    {/* DESKTOP MENU (RIGHT SIDE) */}
    <div className="hidden md:flex items-center gap-2">
      

      <button className="px-4 py-2 text-lg font-medium text-slate-700 hover:text-blue-700 transition rounded-full hover:bg-slate-100">
        Login
      </button>

      <div className="w-px h-6 bg-slate-200 mx-1" />

     <button className="px-5 py-2 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 rounded-md shadow-sm transition">
  Start Free Trial
</button>
    </div>

    {/* MOBILE HAMBURGER */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden text-3xl shrink-0"
    >
      {menuOpen ? <HiX /> : <HiMenu />}
    </button>

  </div>

  {/* MOBILE MENU */}
  {menuOpen && (
    <div className="md:hidden border-t bg-white shadow-sm">
      <div className="flex flex-col py-2">

        <button className="flex items-center px-5 py-3 text-slate-700 text-sm font-medium hover:bg-slate-50">
          Create Account
        </button>

        <button className="flex items-center px-5 py-3 text-slate-700 text-sm font-medium hover:bg-slate-50">
          Login
        </button>

        <div className="my-2 border-t border-slate-100" />

        <button className="mx-3 mb-3 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 active:scale-[0.99] transition">
          Free Trial
        </button>

      </div>
    </div>
  )}
</header>)
}