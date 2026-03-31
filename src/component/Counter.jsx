const Counter = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-10 px-4 md:px-8 lg:px-16">
      <div className="  container mx-auto flex flex-col md:flex-row items-center justify-between text-white text-center gap-6 md:gap-0 max-w-6xl">

        {/* Counter 1 */}
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">50K+</h2>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base opacity-80">Active Users</p>
        </div>

        {/* Separator */}
        <div className="hidden md:block w-px h-12 bg-white/40 mx-4"></div>

        {/* Counter 2 */}
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">200+</h2>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base opacity-80">Premium Tools</p>
        </div>

        {/* Separator */}
        <div className="hidden md:block w-px h-12 bg-white/40 mx-4"></div>

        {/* Counter 3 */}
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">4.9</h2>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base opacity-80">Rating</p>
        </div>

      </div>
    </div>
  );
};

export default Counter;