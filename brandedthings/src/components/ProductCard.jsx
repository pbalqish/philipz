import { useState } from "react";
import dataProducts from "../assets/products.json";

export default function ProductCard() {
  const [products, setProducts] = useState(dataProducts);
  return (
    <>
      <div className="p-5">
        <div className="flex flex-wrap justify-center gap-2">
          <button className="btn btn-warning btn-sm">Household Products</button>
          <button className="btn btn-warning btn-sm">Lighting</button>
          <button className="btn btn-warning btn-sm">Sound & Vision</button>
          <button className="btn btn-warning btn-sm">Personal Care</button>
          <button className="btn btn-warning btn-sm">Mom & Baby</button>
        </div>
        <div className="flex flex-wrap justify-center gap-5 m-5">
          {products.map((product, index) => {
            return (
              <div
                className="card card-compact my-1 w-72 bg-base-100 shadow-xl"
                key={index}
              >
                <figure>
                  <img src={product.imgUrl} alt="image" />
                </figure>
                <div className="card-body gap-1">
                  <h2 className="card-title">{product.name}</h2>
                  <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-warning btn-sm">
                      See Detail
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="join flex flex-row justify-center">
          <button className="join-item btn btn-outline">Previous page</button>
          <button className="join-item btn btn-outline">Next</button>
        </div>
      </div>
    </>
  );
}
