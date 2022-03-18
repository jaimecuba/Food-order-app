import { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";


function App() {
  const [showCart, setShowCart] = useState(false)

  const showCartOn = () =>{
    setShowCart(true)
  }

  const showCartOff = () =>{
    setShowCart(false)
  }

  return (
    <CartProvider>
      {showCart && <Cart showCartOff={showCartOff}/>}
      <Header showCartOn={showCartOn}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
