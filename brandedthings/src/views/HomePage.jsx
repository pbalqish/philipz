import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Sort from "../components/Sort";
import axios from "axios";
import Toastify from "toastify-js";
import Search from "../components/Search";

export default function HomePage({ url }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  async function fetchProducts() {
    try {
      const { data } = await axios(
        `${url}/apis/pub/branded-things/products?q=${search}&i=&limit=10&page=1&sort=ASC`
      );
      setProducts(data.data.query);
    } catch (error) {
      Toastify({
        text: error.response.data.error,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#A91D3A",
        },
      }).showToast();
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [search]);

  const searchOnChange = (event) => {
    let newSearch = event.target.value;
    setSearch(newSearch);
  };

  return (
    <>
      <Hero />
      <div className="p-5">
        <div className="flex flex-wrap justify-center gap-5">
          <Sort url={url} />
          <Search searchOnChange={searchOnChange} />
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
