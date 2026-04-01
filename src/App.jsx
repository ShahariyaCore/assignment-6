import { useState } from 'react'
import Navbar from './component/NavBar'
import Banner from './component/Banner'
import Counter from './component/Counter'
import ModelHeader from './component/modelHader'
import Model from './component/Model'
import Cart from './component/cart'
import Step from './component/Step'
import Prices from './component/Prices'
import CTA from './component/Cta'

const getModels = async () => {
  const response = await fetch('/models.json')
  const data = await response.json()
  return data
}

const modelPromise = getModels()

function App() {
  const [activeTab, setActiveTab] = useState('models')
  const [cartItems, setCartItems] = useState([])

  // 🔥 handle add to cart
  const handleAddToCart = (model) => {
    setCartItems((prev) => [...prev, model])
    setActiveTab("cart") // 👉 switch tab automatically
  }

  return (
    <>
      <Navbar cartItems={cartItems} setActiveTab={setActiveTab} />
      <Banner />
      <Counter />
      <ModelHeader />

      {/* Tabs */}
      <div className="tabs justify-center gap-3 my-4">
        <input
          type="radio"
          className={`tab px-6 py-2 rounded-full ${
            activeTab === "models"
              ? "bg-purple-600 text-white"
              : "bg-gray-200"
          }`}
          aria-label="Products"
          onClick={() => setActiveTab("models")}
          checked={activeTab === "models"}
          readOnly
        />

        <div className="relative inline-block">
  <input
    type="radio"
    id="cart-tab"
    name="my_tabs_1"
    className="peer hidden"
    onClick={() => setActiveTab("cart")}
    checked={activeTab === "cart"}
    readOnly
  />
  <label
    htmlFor="cart-tab"
    className={`tab px-6 py-2 rounded-full cursor-pointer select-none ${
      activeTab === "cart"
        ? "bg-purple-600 text-white"
        : "bg-gray-200 text-black"
    }`}
    aria-label="Cart tab"
  >
    🛒 Cart
  </label>

  {cartItems.length > 0 && (
    <span className="absolute -top-1 -right-2 inline-flex items-center justify-center px-2 py-0.5 text-[18px] font-bold leading-none text-white bg-pink-600 rounded-full">
      {cartItems.length}
    </span>
  )}
</div>
      </div>

      {/* Pages */}
      {activeTab === "models" && (
        <Model 
          modelPromise={modelPromise} 
          onAddToCart={handleAddToCart}   // 🔥 pass function
        />
      )}

     {activeTab === "cart" && (
  <Cart 
    cartItems={cartItems} 
    setCartItems={setCartItems} 
  />

 
)}
      <Step />
      <Prices />
      <CTA />
    </>
  )
}

export default App