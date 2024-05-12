import { useState, useEffect } from "react";
import axios from "axios";
import Toastify from "toastify-js";
import ProductList from "../components/ProductList";

export default function HomePage({ url }) {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const { data } = await axios.get(`${url}/apis/branded-things/products`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setProducts(data.data);
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
  }, []);

  return (
    <>
      <section className="container-fluid" id="home-section">
        <div className="row">
          <section
            className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
            id="product-section"
          >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="display-2">Products</h1>
              <button className="btn btn-primary rounded-pill" id="new-product">
                <span className="icon material-symbols-outlined">add</span>New
                Product
              </button>
            </div>
            <div className="row">
              <div className="col-12 table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col" width="180px">
                        Image
                      </th>
                      <th scope="col" width="250px">
                        Description
                      </th>
                      <th scope="col">Stock</th>
                      <th scope="col">Price</th>
                      <th scope="col">Author</th>
                      <th scope="col" width="50px"></th>
                    </tr>
                  </thead>
                  {products.map((product, index) => {
                    return (
                      <ProductList
                        key={product.id}
                        product={product}
                        fetchProducts={fetchProducts}
                        index={index}
                        url={url}
                      />
                    );
                  })}
                </table>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
