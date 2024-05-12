import { useNavigate } from "react-router-dom";
import axios from "axios";
import Toastify from "toastify-js";

export default function ProductList({ product, index, fetchProducts, url }) {
  const navigate = useNavigate();

  async function handleDelete(id, event) {
    event.preventDefault();
    try {
      await axios.delete(`${url}/apis/branded-things/products/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      Toastify({
        text: "Successfully deleted data",
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
      fetchProducts();
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

  function handleEdit(id, event) {
    event.preventDefault();
    navigate(`/edit/${id}`);
  }

  function handleEditImage(id, event) {
    event.preventDefault();
    navigate(`/edit/image/${id}`);
  }

  return (
    <>
      <tbody id="table-product">
        <tr>
          <td scope="row">#{index + 1}</td>
          <td className="fw-bold">{product.name}</td>
          <td>
            <img src={product.imgUrl} className="img-fluid" />
          </td>
          <td>{product.description}</td>
          <td>{product.stock}</td>
          <td className="fw-bold">{product.price}</td>
          <td>{product.User.email}</td>
          <td>
            <span className="d-flex">
              <a
                href=""
                className="ms-3"
                onClick={(event) => {
                  handleDelete(product.id, event);
                }}
              >
                <span className="icon material-symbols-outlined text-danger">
                  delete
                </span>
              </a>
              <a
                href=""
                className="ms-3"
                onClick={(event) => {
                  handleEdit(product.id, event);
                }}
              >
                <span className="icon material-symbols-outlined text-danger">
                  edit
                </span>
              </a>
              <a
                href=""
                className="ms-3"
                onClick={(event) => {
                  handleEditImage(product.id, event);
                }}
              >
                <span className="icon material-symbols-outlined text-danger">
                  image
                </span>
              </a>
            </span>
          </td>
        </tr>
      </tbody>
    </>
  );
}
