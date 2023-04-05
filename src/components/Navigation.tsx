import { Link } from "react-router-dom";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { useState } from "react";

function Navigation() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="flex justify-between items-center px-16 py-3 shadow-md fixed w-full bg-white z-50">
      <div>
        <Link className="text-2xl font-bold text-black" to="/">
          Logo
        </Link>
      </div>
      <div className="basis-1/2">
        <div className="w-full rounded-2xl overflow-hidden relative">
          <input
            className="w-full py-1.5 px-4 outline-0 bg-slate-300"
            type="search"
            placeholder="Search"
            value={searchValue}
            onChange={(e: any) => setSearchValue(e.target.value)}
          />
          <Link to={`/search?query=${searchValue}`}>
            <div className="cursor-pointer w-16 bg-black absolute top-0 right-0 h-full flex justify-center items-center pb-2 pr-2">
              <SearchOutlined className="text-white text-2xl" />
            </div>
          </Link>
        </div>
      </div>
      <div className=" basis-1/12">
        <ul className="flex items-center justify-between">
          <li>
            <div>
              <Badge count={5}>
                <ShoppingCartOutlined className="text-3xl flex items-center cursor-pointer " />
              </Badge>
            </div>
          </li>
          <li className="text-lg">
            <div className=" w-10 h-10 rounded-full overflow-hidden border-2 cursor-pointer">
              <img
                className="w-full h-full"
                src="./images/profilePic.jpg"
                alt=""
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
