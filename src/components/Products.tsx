import { Divider, Select } from "antd";
import Product from "./Product";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Products({ screen }: any) {
  const [products, setProducts] = useState<any>([]);
  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    console.log(value);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("/products/get/products");
      console.log("Data: ", data.data);
      setProducts(data.data);
    };
    getData();
  }, []);
  return (
    <div className="bg-slate-100 px-16 py-6">
      <Divider orientation="left">Products</Divider>
      {screen !== "home" ? (
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
      ) : null}
      <div className="products-grid mt-10">
        {products.map((product: any) => (
          <Product
            key={product._id}
            title={product.title}
            category={product.category}
            image={product.image}
            review={product.review}
            reviewCount={product.reviewCount}
            price={product.price}
            isLoved={product.isLoved}
          />
        ))}
        {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}
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
