import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="card card-compact my-1 w-72 bg-base-200 shadow-xl">
        <figure className="max-w-full max-h-64  md:w-auto rounded-md shadow shadow-slate-100">
          <img src={product.imgUrl} alt="image" className="" />
        </figure>
        <div className="card-body gap-1">
          <h2 className="card-title">{product.name}</h2>
          <div className="card-actions justify-end">
            <button
              onClick={() => navigate(`/detail/${product.id}`)}
              className="btn btn-outline btn-warning btn-sm"
            >
              See Detail
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
