import HeartOutlined from "@ant-design/icons/HeartOutlined";
import HeartFilled from "@ant-design/icons/HeartFilled";
import Card from "../utils/Card";
import Review from "./Review";
import { Link } from "react-router-dom";

function Product() {
  const reviewed = true;
  return (
    <div className="card-hover">
      <Card>
        <div className="w-full rounded-lg overflow-hidden">
          <Link to="/product-details" className="cursor-pointer">
            <img
              className="w-full hover-effect-product-img"
              src="https://static.vecteezy.com/system/resources/thumbnails/009/384/620/small/fresh-pizza-and-pizza-box-clipart-design-illustration-free-png.png"
              alt=""
            />
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="text-sm my-2 font-semibold leading-0">Category</h4>
          <Review reviewCount={2.8} />
        </div>
        <div className="flex justify-between">
          <div>
            <Link className="cursor-pointer" to="/product-details">
              <h2 className="text-lg font-bold m-0 leading-5">
                This is title helle ev how are you
              </h2>
            </Link>
          </div>
          {/* <p className="text-xl font-bold leading-5 text-red-700"> */}
          {reviewed ? (
            <HeartFilled className="text-xl leading-5 cursor-pointer" />
          ) : (
            <HeartOutlined className="text-xl leading-5 cursor-pointer" />
          )}
          {/* </p> */}
        </div>
        <div className="w-full flex justify-between items-center mt-2">
          <p className="text-lg font-bold leading-5">
            Price: <span className="text-red-700">200tk</span>
          </p>
          <button className="text-sm rounded-md font-bold p-2 px-3 flex justify-center items-center bg-orange-600 outline-none text-white max-w-24 hover:text-black hover:shadow-lg hover:bg-slate-400">
            Add to cart
          </button>
        </div>
      </Card>
    </div>
  );
}

export default Product;
