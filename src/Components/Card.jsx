import { useContext } from "react";
import { ShoppingCartContext } from "../Context/Context";

const Card = (data) => {
  const context = useContext(ShoppingCartContext);
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute top-0 left-0 bg-alt-color/60 rounded-lg text-white text-xs m-2 px-3 py-0.5">
          {data.data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.images[0]}
          alt={data.data.title}
        />
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 hover:bg-primary-color hover:text-white"
          onClick={() => context.setCount(context.count + 1)}
        >
          +
        </button>
      </figure>
      <p className="flex justify-between items-center">
        <span className="font-semibold">{data.data.title}</span>
        <span className="text-lg font-bold">${data.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
