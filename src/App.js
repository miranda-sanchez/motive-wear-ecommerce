import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index exact path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
