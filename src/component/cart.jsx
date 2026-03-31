const Cart = ({ cartItems, setCartItems }) => {

  // 🔥 remove item
  const handleRemove = (indexToRemove) => {
    const updated = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updated);
  };

  // 🔥 total price
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow">

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Your Cart
        </h2>

        {/* Cart Items */}
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-xl"
            >
              {/* Left */}
              <div className="flex items-center gap-4">
                <div className="text-2xl bg-gray-200 p-3 rounded-full">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-gray-800 font-medium">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    ${item.price}
                  </p>
                </div>
              </div>

              {/* Remove */}
              <button
                onClick={() => handleRemove(index)}
                className="text-pink-500 text-sm font-medium hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="flex justify-between items-center mt-6">
          <span className="text-gray-400">Total:</span>
          <span className="text-xl font-bold text-gray-800">
            ${total}
          </span>
        </div>

        {/* Checkout Button */}
        <button className="w-full mt-6 py-3 rounded-full text-white font-medium 
          bg-gradient-to-r from-purple-600 to-pink-500 
          hover:from-purple-700 hover:to-pink-600 transition">
          Proceed To Checkout
        </button>

      </div>
    </div>
  );
};

export default Cart;