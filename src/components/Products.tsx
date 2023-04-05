import { Divider, Select } from "antd";
import Product from "./Product";
import { Link } from "react-router-dom";

function Products({ screen }: any) {
  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    console.log(value);
  };
  return (
    <div className="bg-slate-100 px-16 py-6">
      <Divider orientation="left">Products</Divider>
      <Select
        labelInValue
        defaultValue={{ value: "lucy", label: "Lucy (101)" }}
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          {
            value: "jack",
            label: "Jack (100)",
          },
          {
            value: "lucy",
            label: "Lucy (101)",
          },
        ]}
      />
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
      {screen === "products" ? null : (
        <div className="text-center my-7">
          <Link
            className="font-bold cursor-pointer text-orange-700"
            to="/products"
          >
            See all...
          </Link>
        </div>
      )}
    </div>
  );
}

export default Products;
