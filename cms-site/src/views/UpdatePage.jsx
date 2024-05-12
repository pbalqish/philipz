import ProductForm from "../components/ProductForm";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Toastify from "toastify-js";

export default function UpdatePage({ url }) {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  async function fetchProduct() {
    try {
      const { data } = await axios.get(
        `${url}/apis/branded-things/products/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
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

  async function handleSubmit(
    event,
    name,
    description,
    price,
    stock,
    imgUrl,
    categoryId
  ) {
    event.preventDefault();
    try {
      const newData = {
        name,
        description,
        price: +price,
        stock: +stock,
        imgUrl,
        categoryId: +categoryId,
      };

      await axios.put(`${url}/apis/branded-things/products/${id}`, newData, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      Toastify({
        text: "Successfully updated product",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#7ABA78",
        },
      }).showToast();
      navigate("/");
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

  return (
    <>
      <ProductForm
        url={url}
        handleSubmit={handleSubmit}
        product={product}
        formName="Update Product"
      />
    </>
  );
}
