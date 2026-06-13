import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-slate-950 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}

        <Link to="/">
          <div className="rounded-full bg-white p-2 shadow-lg">
            <img
              src={logo}
              alt="TOTAL_SSB Logo"
              className="
        h-10
        w-10
        md:h-14
        md:w-12
        rounded-full
        object-cover
      "
            />
          </div>
        </Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-green-400">
            Home
          </Link>

          <Link to="/forces" className="hover:text-green-400">
            Forces
          </Link>

          <Link to="/psychology" className="hover:text-green-400">
            Psychology
          </Link>

          <Link to="/knowledge" className="hover:text-green-400">
            Knowledge Hub
          </Link>


          <Link to="/interview" className="hover:text-green-400">
            Interview
          </Link>

          <Link to="/operations" className="hover:text-green-400">
            ⚔️ Operations
          </Link>
          <Link to="/dashboard" className="text-white">
              Dashboard
            </Link>
        </div>

        {/* Mobile Hamburger */}

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700">
          <div className="flex flex-col p-4 space-y-4">
            <Link to="/" onClick={closeMenu} className="hover:text-green-400">
              Home
            </Link>

            <Link
              to="/forces"
              onClick={closeMenu}
              className="hover:text-green-400"
            >
              Forces
            </Link>

            <Link
              to="/psychology"
              onClick={closeMenu}
              className="hover:text-green-400"
            >
              Psychology
            </Link>

            <Link
              to="/knowledge"
              onClick={closeMenu}
              className="hover:text-green-400"
            >
              Knowledge Hub
            </Link>

            

            <Link
              to="/interview"
              onClick={closeMenu}
              className="hover:text-green-400"
            >
              Interview
            </Link>

            <Link
              to="/operations"
              onClick={closeMenu}
              className="hover:text-green-400"
            >
              ⚔️ Operations
            </Link>
            <Link to="/dashboard" className="text-white">
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
