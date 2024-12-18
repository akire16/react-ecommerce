import { useState, useEffect } from "react";
// Components
import Layout from "../Components/Layout/Layout";
import Card from "../Components/Card";
import ProductDetail from "../Components/ProductDetail/ProductDetail";
import Banner from "../Components/Banner/Banner";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <Layout>
      <Banner />
      <div className="grid gap-5 grid-cols-5 w-full max-w-screen-xl mt-10 items-center">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
