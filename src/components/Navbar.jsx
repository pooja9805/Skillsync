import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md border-b border-black/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-black text-3xl font-extrabold tracking-wide">
          SkillSync
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-black font-semibold text-lg">
          <Link to="/" className="hover:underline underline-offset-4">Home</Link>
          <Link to="/resume" className="hover:underline underline-offset-4">Resume</Link>
          <Link to="/career-paths" className="hover:underline underline-offset-4">Career Paths</Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <Link to="/login" className="text-black font-medium hover:underline underline-offset-4">Login</Link>
          <Link
            to="/signup"
            className="border border-black text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition-all"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/40 backdrop-blur-lg border-t border-black/10 px-6 py-4 space-y-4 text-black font-medium">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link>
          <Link to="/career-paths" onClick={() => setIsOpen(false)}>Career Paths</Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
          <Link
            to="/signup"
            className="block border border-black text-center px-4 py-2 rounded-lg hover:bg-black hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
