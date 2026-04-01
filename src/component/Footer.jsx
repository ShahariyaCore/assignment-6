const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-red-900/50 pt-16 pb-10 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              
              <h2 className="text-5xl font-bold tracking-tighter text-white">
                DigiTools
              </h2>
            </div>

            <p className="text-zinc-400 text-lg max-w-md leading-relaxed mx-auto md:mx-0">
              Premium AI tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful models.
            </p>
          </div>

          {/* Product Links */}
          <div className="md:col-span-2">
            <h3 className="text-red-400 font-semibold mb-6 text-2xl">Product</h3>
            <ul className="space-y-3 text-zinc-400">
              {["Features", "Pricing", "Templates", "Integrations"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2">
            <h3 className="text-red-400 font-semibold mb-6 text-2xl">Company</h3>
            <ul className="space-y-3 text-zinc-400">
              {["About", "Blog", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="md:col-span-2">
            <h3 className="text-red-400 font-semibold mb-6 text-2xl">Resources</h3>
            <ul className="space-y-3 text-zinc-400">
              {["Documentation", "Help Center", "Community", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-2 text-center md:text-left">
            <h3 className="text-red-400 font-semibold mb-6 text-2xl">Social Links</h3>
            <div className="flex justify-center md:justify-start gap-4 text-xl text-zinc-400">
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 rounded-full bg-zinc-800 hover:bg-red-500 hover:text-white transition-transform duration-300 transform hover:scale-110 hover:animate-pulse"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-full bg-zinc-800 hover:bg-red-500 hover:text-white transition-transform duration-300 transform hover:scale-110 hover:animate-pulse"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 rounded-full bg-zinc-800 hover:bg-red-500 hover:text-white transition-transform duration-300 transform hover:scale-110 hover:animate-pulse"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} AI Hub. All rights reserved.</div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-red-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-400 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-red-400 transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
