import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Toastify from "toastify-js";

export default function UpdateImage({ url }) {
  const navigate = useNavigate();
  const [imgUrl, setImgUrl] = useState("");
  const { id } = useParams();

  async function handleSubmit(event, imgUrl) {
    event.preventDefault();
    try {
      const newData = { imgUrl };

      await axios.patch(`${url}/apis/branded-things/products/${id}`, newData, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      Toastify({
        text: "Successfully updated image",
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
      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
        id="update-product-section"
      >
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="pt-3 pb-2 mb-3">
              <form
                id="register-form"
                onSubmit={(event) => handleSubmit(event, imgUrl)}
              >
                <h1 className="h3 mb-3 display-1">Update Image</h1>
                <div className="input-group mb-3">
                  <input
                    type="file"
                    className="form-control pb-2"
                    id="inputGroupFile02"
                    autoComplete="off"
                    onChange={(event) => setImgUrl(event.target.value)}
                  />
                </div>
                <button
                  className="btn btn-lg btn-primary rounded-pill w-100 p-2 mt-3"
                  type="submit"
                >
                  Update Image
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
