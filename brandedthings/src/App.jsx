import { useState } from 'react'
import dataProducts from '../products.json'

function App() {
  const [products, setProducts] = useState(dataProducts)
  return (
    <>
      {/* navbar */}
      <nav className='navbar sticky top-0 z-10 bg-sky-700 text-white shadow'>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-sky-700 rounded-box w-52">
              <li><a>HOMEPAGE</a></li>
              <li><a>LOGIN</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">PHILIPS | Official Store</a>
        </div>
        <div className="navbar-end">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered text-black w-24 md:w-auto" />
          </div>
        </div>
      </nav>

      {/* filter */}

      {/* products - public */}
      <div className="p-5">
        <div className='flex justify-center gap-2'>
          <button className="btn btn-warning btn-sm">Category 1</button>
          <button className="btn btn-warning btn-sm">Category 2</button>  
          <button className="btn btn-warning btn-sm">Category 3</button>  
          <button className="btn btn-warning btn-sm">Category 4</button>  
          <button className="btn btn-warning btn-sm">Category 5</button>  
        </div>
        <main className="grid grid-cols-3 gap-2 my-5 bg-white px-10">
          {products.map((product) => {
            return (
              <>
                <div className="card card-compact my-2 w-96 bg-base-100 shadow-xl">
                  <figure><img src={product.imgUrl} alt="image" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <div className="card-actions justify-end">
                      <button className="btn btn-outline btn-info">See Detail</button>
                    </div>
                  </div>
                </div>          
              </>
            )
          })}
        </main>
        <div className="join flex flex-row justify-center">
          <button className="join-item btn btn-outline">Previous page</button>
          <button className="join-item btn btn-outline">Next</button>
        </div>
      </div>

      {/* pagination */}
    </>
  )
}

export default App
