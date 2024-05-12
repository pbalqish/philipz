import ProductForm from "../components/ProductForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Toastify from "toastify-js";

export default function CreatePage({ url }) {
  const navigate = useNavigate();

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

      await axios.post(`${url}/apis/branded-things/products`, newData, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      Toastify({
        text: "Successfully added new product",
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
        formName="Add New Product"
      />
    </>
  );
}
