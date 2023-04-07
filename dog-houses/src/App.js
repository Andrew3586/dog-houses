import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import Layout from "./components/layout/Layout";
import AddNewListing from "./components/AddNewListing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Private Routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/adddoghouse" element={<AddNewListing />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
