import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GuestPage from "./components/GuestPage";
import FridgeCreator from "./components/FridgePage";
import FridgePage from "./components/FridgePage";

const App = () => (
  <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<GuestPage />} />
        <Route path='/fridge' element={<FridgePage />} />
      </Routes>
    </BrowserRouter>
  </React.Fragment>
);

export default App;
