import { useSearchParams } from "react-router-dom";
import Products from "../components/Products";

function SearchScreen() {
  const [searchParams, setSearchParams] = useSearchParams("search");
  const query = searchParams.get("query");
  return (
    <div>
      <div className="px-16">
        <h1 className=" mt-20 text-2xl ">Search Query: "{query}"</h1>
      </div>
      <Products screen="search" />
    </div>
  );
}

export default SearchScreen;
