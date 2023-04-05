import { Divider } from "antd";
import Product from "./Product";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="bg-slate-100 px-16 py-6">
      <Divider orientation="left">Products</Divider>
      <div className="products-grid mt-10">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className="text-center my-7">
        <Link className="font-bold cursor-pointer text-orange-700" to="/hello">
          See all...
        </Link>
      </div>
    </div>
  );
}

export default Products;
