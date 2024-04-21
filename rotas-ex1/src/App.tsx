import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import Promotion from "./routes/Home/Promotion/imndex";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeBody />}/>
          <Route path="/promotion" element={<Promotion />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
