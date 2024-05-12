import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Toastify from "toastify-js";

export default function ProductDetail({ url }) {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  async function fetchProduct() {
    try {
      const { data } = await axios.get(
        `${url}/apis/pub/branded-things/products/${id}`
      );
      setProduct(data.data);
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
    fetchProduct();
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-5 max-w-xl mx-auto my-7 p-5 rounded-lg bg-white shadow shadow-slate-300">
        <div className="flex m-auto">
          <img
            src={product.imgUrl}
            alt="image"
            className="max-w-60 rounded-2xl"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold">{product.name}</h1>
          <h1 className="text-xl text-sky-700 font-bold">Rp {product.price}</h1>
          <p className="font-medium">{product.description}</p>
          <p className="font-medium">Stock : {product.stock}</p>
        </div>
        <div className="m-auto">
          <button
            onClick={() => navigate("/")}
            className="btn btn-warning rounded-xl"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
}
