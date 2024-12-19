import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../Context/Context";
import Layout from "../Components/Layout";
import OrderCard from "../Components/OrderCard";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);

  if(index === "last") index = context.order?.length -1

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-10">
        <Link to="/my-orders" className="absolute left-0">
          <button className="flex justify-center items-center text-black hover:text-primary-color w-6 h-6 rounded-full m-2 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
        </Link>
        <h1 className="font-bold">My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {context.order?.[index]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imaUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
