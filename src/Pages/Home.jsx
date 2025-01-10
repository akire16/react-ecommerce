import { useContext } from "react";
// Components
import Layout from "../Components/Layout";
import Card from "../Components/Card";
import ProductDetail from "../Components/ProductDetail/ProductDetail";
import Banner from "../Components/Banner/Banner";
import { ShoppingCartContext } from "../Context/Context";

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map((item) => (
        <Card key={item.id} data={item} />
      ));
    } else {
      return <div>No Results Found</div>;
    }
  };

  return (
    <Layout>
      <Banner />
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-gray-500 p-4 mb-4 mt-10 focus:outline-none w-full max-w-screen-xl"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-x-5 gap-y-7 grid-cols-5 w-full max-w-screen-xl mt-10 items-center">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
