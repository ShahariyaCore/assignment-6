const CTA = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 text-center text-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold animate-fadeIn">
          Ready To Transform Your Workflow?
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-white/80 text-lg md:text-xl animate-fadeIn delay-100">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br />
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 rounded-full bg-white text-purple-700 font-semibold hover:bg-gray-100 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            Explore Products
          </button>

          <button className="px-6 py-3 rounded-full border border-white/50 text-white hover:bg-white hover:text-purple-700 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            View Pricing
          </button>
        </div>

        {/* Bottom text */}
        <p className="mt-6 text-sm text-white/70">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>

      {/* Optional subtle animated background shapes */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-72 h-72 bg-pink-500 rounded-full absolute -top-16 -left-16 animate-pulseSlow"></div>
        <div className="w-96 h-96 bg-indigo-500 rounded-full absolute -bottom-20 -right-20 animate-pulseSlow"></div>
      </div>
    </section>
  );
};

export default CTA;