import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductsScreen from "./screens/ProductsScreen";
import SearchScreen from "./screens/SearchScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="min-height-full flex flex-col bg-slate-100">
        <Navigation />
        <Routes>
          <Route path="/products" element={<ProductsScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
