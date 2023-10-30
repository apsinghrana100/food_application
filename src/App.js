import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ActionAreaCard from "./component/card_componet";
import Menu from "./menu_component/menu";
import MenuDetails from "./menu_component/menu_detail";
import AddToCart from "./component/addToCartPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ActionAreaCard />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menudetails/:id" element={<MenuDetails />} />
          <Route path="/addtocart" element={<AddToCart />} />
          
  
          
          {/* <Route path="/" element={<Homepage/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
