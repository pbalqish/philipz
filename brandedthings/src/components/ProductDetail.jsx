import { useState } from "react";
import productData from "../assets/products.json";

export default function ProductDetail() {
  const [product, setProduct] = useState(productData);
  return (
    <>
      <div className="flex flex-wrap gap-5 max-w-xl mx-auto my-7 p-5 rounded-lg bg-white shadow shadow-slate-300">
        <img
          src={product[0].imgUrl}
          alt="image"
          className="flex max-w-60 rounded-2xl"
        />
        <div>
          <h1 className="text-xl font-bold">{product[0].name}</h1>
          <h1 className="text-xl text-sky-700 font-bold">
            Rp {product[0].price}
          </h1>
          <p className="font-medium">{product[0].description}</p>
          <p className="font-medium">Stock : {product[0].stock}</p>
        </div>
        <div>
          <button className="btn btn-warning rounded-xl">Back</button>
        </div>
      </div>
    </>
  );
}
