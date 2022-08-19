import React from "react";
import { Route, Routes } from "react-router-dom";
import MiniProgramms from "./pages/MiniProgramms";
import Catalog from "./pages/Catalog";
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import PostList from "./pages/PostList";

function App() {

   return (
      <div className="App">
      <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="main" element={<Main />} />
            <Route path="cart" element={<Cart />} />
            <Route path="miniProgramms" element={<MiniProgramms />} />
            <Route path="postlist" element={<PostList />} />            
      </Routes>
      </div>

   )
}

export default App;
