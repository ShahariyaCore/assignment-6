const Prices = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">

          {/* Starter */}
          <div className="bg-white rounded-3xl shadow-md p-8 text-left border border-gray-200 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-gray-800">Starter</h3>
            <p className="text-gray-500 text-sm mt-1">Perfect for getting started</p>

            <h2 className="text-3xl font-bold mt-6">
              $0<span className="text-base text-gray-500">/Month</span>
            </h2>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✔ Access to 10 free tools</li>
              <li>✔ Basic templates</li>
              <li>✔ Community support</li>
              <li>✔ 1 project per month</li>
            </ul>

            <button className="mt-8 w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium hover:from-purple-600 hover:to-indigo-600 transition">
              Get Started Free
            </button>
          </div>

          {/* Pro */}
          <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-3xl shadow-lg p-8 text-left scale-105 transform hover:scale-106 transition duration-500">
            
            {/* Badge */}
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-xs px-4 py-1 rounded-full text-gray-900 font-semibold shadow-lg animate-pulse">
              Most Popular
            </span>

            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="text-sm opacity-90 mt-1">Best for professionals</p>

            <h2 className="text-3xl font-bold mt-6">
              $29<span className="text-base opacity-80">/Month</span>
            </h2>

            <ul className="mt-6 space-y-3 text-white opacity-90">
              <li>✔ Access to all premium tools</li>
              <li>✔ Unlimited templates</li>
              <li>✔ Priority support</li>
              <li>✔ Unlimited projects</li>
              <li>✔ Cloud sync</li>
              <li>✔ Advanced analytics</li>
            </ul>

            <button className="mt-8 w-full py-3 rounded-full bg-white text-purple-600 font-semibold hover:bg-gray-100 transition">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-3xl shadow-md p-8 text-left border border-gray-200 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-gray-800">Enterprise</h3>
            <p className="text-gray-500 text-sm mt-1">For teams and businesses</p>

            <h2 className="text-3xl font-bold mt-6">
              $99<span className="text-base text-gray-500">/Month</span>
            </h2>

            <ul className="mt-6 space-y-3 text-gray-600">
              <li>✔ Everything in Pro</li>
              <li>✔ Team collaboration</li>
              <li>✔ Custom integrations</li>
              <li>✔ Dedicated support</li>
              <li>✔ SLA guarantee</li>
              <li>✔ Custom branding</li>
            </ul>

            <button className="mt-8 w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium hover:from-purple-600 hover:to-indigo-600 transition">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Prices;