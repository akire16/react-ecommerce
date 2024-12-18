import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";
import "./CheckoutSideMenu.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProduct = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProduct);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      data: "01.02.23",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartPRoducts)
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
  }

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <button
          className="hover:text-primary-color"
          onClick={() => context.closeCheckoutSideMenu()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="px-6 overflow-y-scroll">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imaUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6">
        <p className="flex justify-between items-center">
          <span className="font-normal">Total:</span>
          <span className="font-medium text-xl">${totalPrice(context.cartProducts)}</span>
        </p>
        <button onClick={() => handleCheckout()}>Checkout</button>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
