import { useState } from "react";
import dataProducts from "../assets/products.json";

export default function ProductCard() {
  const [products, setProducts] = useState(dataProducts);
  return (
    <>
      <div className="p-5">
        <div className="flex justify-center gap-2">
          <button className="btn btn-warning btn-sm">Household Products</button>
          <button className="btn btn-warning btn-sm">Lighting</button>
          <button className="btn btn-warning btn-sm">Sound & Vision</button>
          <button className="btn btn-warning btn-sm">Personal Care</button>
          <button className="btn btn-warning btn-sm">Mom & Baby</button>
        </div>
        <main className="flex flex-wrap justify-center gap-5 m-5 bg-white">
          {products.map((product) => {
            return (
              <>
                <div className="card card-compact my-1 w-72 bg-base-100 shadow-xl">
                  <figure>
                    <img src={product.imgUrl} alt="image" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <div className="card-actions justify-end">
                      {/* <button className="btn btn-outline btn-info">See Detail</button> */}
                      <button className="btn btn-outline btn-warning">
                        See Detail
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </main>
        <div className="join flex flex-row justify-center">
          <button className="join-item btn btn-outline">Previous page</button>
          <button className="join-item btn btn-outline">Next</button>
        </div>
      </div>
    </>
  );
}
