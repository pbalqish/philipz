export default function Hero() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.philips.com/is/image/philipsconsumer/0b2cb43b7fc644e2aec3b0b301017185_21x9?$jpglarge$&fit=crop&wid=1180&hei=506)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Philips Indonesia</h1>
            <p className="mb-5">
              Temukan inovasi & teknologi dari Philips untuk membantu Anda
              tampil dengan percaya diri serta hidup lebih sehat di sini!
            </p>
            <button className="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
