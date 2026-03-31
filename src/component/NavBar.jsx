import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-600">
          DigiTools
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="hover:text-purple-600 cursor-pointer">Products</li>
          <li className="hover:text-purple-600 cursor-pointer">Features</li>
          <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
          <li className="hover:text-purple-600 cursor-pointer">Testimonials</li>
          <li className="hover:text-purple-600 cursor-pointer">FAQ</li>
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">

          {/* Cart Icon */}
          <div className="relative p-2 rounded-full bg-gray-100 hover:bg-purple-100 cursor-pointer transition">
            <i className="fa-solid fa-cart-shopping text-lg text-gray-700 hover:text-purple-600"></i>
          
          </div>

          {/* Login */}
          <button className="text-gray-700 hover:text-purple-600">
            Login
          </button>

          {/* CTA */}
          <button className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 bg-white rounded-xl shadow-md p-6 space-y-4 text-center text-gray-700 font-medium">

          <p className="hover:text-purple-600 cursor-pointer">Products</p>
          <p className="hover:text-purple-600 cursor-pointer">Features</p>
          <p className="hover:text-purple-600 cursor-pointer">Pricing</p>
          <p className="hover:text-purple-600 cursor-pointer">Testimonials</p>
          <p className="hover:text-purple-600 cursor-pointer">FAQ</p>

          <div className="flex flex-col items-center gap-4 pt-4">

            {/* Cart Icon Mobile */}
            <div className="relative p-3 rounded-full bg-gray-100">
              <i className="fa-solid fa-cart-shopping text-xl text-gray-700"></i>
              
            </div>

            <button className="text-gray-700 hover:text-purple-600">
              Login
            </button>

            <button className="px-6 py-3 rounded-full text-white font-medium 
              bg-gradient-to-r from-purple-600 to-pink-500 
              hover:from-purple-700 hover:to-pink-600 
              transition-all duration-300 shadow-md">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;