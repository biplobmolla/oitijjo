import Review from "../components/Review";

function ProductScreen() {
  return (
    <div className="w-screen bg-white px-16 py-24">
      <h1 className="text-2xl font-bold">Product Title</h1>
      <Review review={3.5} reviewCount={12} />
      <div className="flex justify-between">
        <div className="w-2/4">
          <img
            className="w-full h-96"
            src="https://1.bp.blogspot.com/-B9bZldJNU1Y/XUZaZ2Fw5oI/AAAAAAAABos/oYmMfCgXSesSkM_O2ocenif66xGmicLxgCEwYBhgL/s640/kachagolla-natore.jpg"
            alt=""
          />
          <div className="my-2">
            <div className="flex justify-start items-center">
              <h2 className="font-semibold leading-3 mr-2">User</h2>
              <Review review={2.4} />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              natus.
            </p>
          </div>
          <div className="my-2">
            <div className="flex justify-start items-center">
              <h2 className="font-semibold leading-3 mr-2">User</h2>
              <Review review={2.4} />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              natus.
            </p>
          </div>
        </div>
        <div className=" w-2/4 ml-5">
          <div className="flex justify-between">
            <div className="mb-2 font-semibold">
              <h2>Category: Sweet</h2>
              <h2>Place: Babamaniker Dokan, Sirajgonj</h2>
            </div>
            <h2 className="text-xl font-bold leading-3">
              Price: <span className=" text-red-700">200tk</span>
            </h2>
          </div>
          <div>
            <p className=" h-72 overflow-y-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis dolor id ea, quod consequatur et ipsa expedita cumque
              perferendis dolorum asperiores quisquam minus tempore earum dolore
              facere? Consequatur, nam quas ipsa eum culpa modi, consectetur sit
              dolore repellendus minima asperiores unde rem non quo excepturi
              facere tempore velit. Ipsa corrupti ad dicta. Dignissimos amet
              tempora id tempore facere? Excepturi, doloribus. Possimus placeat
              ab tempore incidunt facilis, pariatur ore repellendus minima
              asperiores unde rem non quo excepturi facere tempore velit. Ipsa
              corrupti ad dicta. Dignissimos amet tempora id tempore facere?
              Excepturi, doloribus. Possimus placeat ab tempore incidunt
              facilis, pariatur ore repellendus minima asperiores unde rem non
              quo excepturi facere tempore velit. Ipsa corrupti ad dicta.
              Dignissimos amet tempora id tempore facere? Excepturi, doloribus.
              Possimus placeat ab tempore incidunt facilis, pariatur tenetur
              magnam expedita a culpa aliquid molestiae perferendis ad suscipit,
              adipisci quam esse! Ducimus aspernatur praesentium dolores, in
              asperiores quia debitis temporibus? Nemo officia laboriosam
              deserunt laudantium magni quae at officiis
            </p>
            <button className="px-6 py-2 my-4 rounded-md bg-orange-500 text-white outline-none font-bold border-0 hover:bg-slate-500 hover:text-black">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
