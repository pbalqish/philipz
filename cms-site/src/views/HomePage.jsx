import ProductList from "../components/ProductList";

export default function HomePage({ url }) {
  return (
    <>
      <section className="container-fluid" id="home-section">
        <div className="row">
          <ProductList />
        </div>
      </section>
    </>
  );
}
