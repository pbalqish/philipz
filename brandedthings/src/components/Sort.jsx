import { useEffect, useState } from "react";
import axios from "axios";
import Toastify from "toastify-js";

export default function Sort({ url }) {
  const [categories, setCategories] = useState([]);

  async function fetchCategories() {
    try {
      const { data } = await axios.get(
        `${url}/apis/pub/branded-things/categories`
      );
      setCategories(data.data);
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
    fetchCategories();
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2">
        <select className="select select-primary w-full max-w-xs">
          <option disabled selected>
            Select Category
          </option>
          {categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
