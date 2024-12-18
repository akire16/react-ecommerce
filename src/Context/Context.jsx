import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  //Shopping cart - increment quantity
  const [count, setCount] = useState(0);

  //Product Detail - Open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  //Product Detail - show product
  const [productToShow, setProductToShow] = useState({});

  //Shopping cart - add products to cart
  const [cartProducts, setCartProducts] =useState([])

  //Checkout Side Menu - Open/close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Shopping cart - Order
  const [order, setOrder] =useState([])

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
