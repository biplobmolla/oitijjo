import HeartOutlined from "@ant-design/icons/HeartOutlined";
import HeartFilled from "@ant-design/icons/HeartFilled";
import Card from "../utils/Card";
import Review from "./Review";
import { Link } from "react-router-dom";

function Product(props: any) {
  const { title, category, image, review, reviewCount, price, isLoved } = props;
  return (
    <div className="card-hover">
      <Card>
        <div className="w-full rounded-lg overflow-hidden">
          <Link to="/product-details" className="cursor-pointer">
            <img
              className="w-full hover-effect-product-img h-52"
              src={
                image ||
                "https://static.vecteezy.com/system/resources/thumbnails/009/384/620/small/fresh-pizza-and-pizza-box-clipart-design-illustration-free-png.png"
              }
              alt=""
            />
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <h4 className="text-sm my-2 font-semibold leading-0">{category}</h4>
          <Review reviewCount={reviewCount} review={review} />
        </div>
        <div className="flex justify-between">
          <div>
            <Link className="cursor-pointer" to="/product-details">
              <h2 className="text-lg font-semibold m-0 leading-5">{title}</h2>
            </Link>
          </div>
          {/* <p className="text-xl font-bold leading-5 text-red-700"> */}
          {isLoved ? (
            <HeartFilled className="text-xl leading-5 cursor-pointer text-orange-600" />
          ) : (
            <HeartOutlined className="text-xl leading-5 cursor-pointer" />
          )}
          {/* </p> */}
        </div>
        <div className="w-full flex justify-between items-center mt-2">
          <p className="text-md font-semibold leading-5 text-blue-600">
            Price: <span className="text-red-700 font-normal">{price} tk</span>
          </p>
          <button className="text-sm rounded-md font-bold p-2 px-3 flex justify-center items-center bg-black outline-none text-white max-w-24 hover:text-black hover:shadow-lg hover:bg-orange-500">
            Add to cart
          </button>
        </div>
      </Card>
    </div>
  );
}

export default Product;
