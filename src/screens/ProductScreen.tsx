import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Review from "../components/Review";

function ProductScreen() {
  const [data, setData] = useState<any>([]);
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const datas = await axios.get(`/products/get/product/${id}`);
      setData(datas.data);
    };
    getProduct();
  }, [id]);
  console.log(data);
  return (
    <div className="w-screen bg-white px-16 py-24">
      <h1 className="text-2xl font-bold">{data?.title}</h1>
      <Review review={data?.review} reviewCount={data?.reviewCount} />
      <div className="flex justify-between">
        <div className="w-2/4">
          <img className="w-full h-96" src={data?.image} alt={data?.title} />
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
              <h2>Category: {data?.category}</h2>
              <h2>
                Place: {data?.store ? data.store + "," : null} {data?.place}
              </h2>
            </div>
            <h2 className="text-xl font-bold leading-3">
              Price: <span className=" text-red-700">{data?.price}tk</span>
            </h2>
          </div>
          <div>
            <p className=" h-72 overflow-y-auto">{data?.description}</p>
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
