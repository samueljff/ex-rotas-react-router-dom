import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import Product from "./routes/Home/Product";
import About from "./routes/Home/About";
import Electronic from "./routes/Home/Product/Category/Electronic";
import Computer from "./routes/Home/Product/Category/Comuter";
import Book from "./routes/Home/Product/Category/Boock";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomeBody />} />
          <Route path="/products" element={<Product />}>
            <Route path="/products/computers" element={<Computer />} />
            <Route path="/products/electronics" element={<Electronic />} />
            <Route path="/products/books" element={<Book />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
