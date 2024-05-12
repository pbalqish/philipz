import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Sort from "../components/Sort";
import axios from "axios";
import Search from "../components/Search";

export default function HomePage({ url }) {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const { data } = await axios(
        `${url}/apis/pub/branded-things/products?q=&i=&limit=10&page=1&sort=ASC`
      );
      console.log(data.data.query);
      setProducts(data.data.query);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Hero />
      <div className="p-5">
        <div className="flex flex-wrap justify-center gap-5">
          <Sort url={url} />
          <Search />
        </div>
        <div className="flex flex-wrap justify-center gap-5 m-5">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
      <Pagination />
    </>
  );
}
