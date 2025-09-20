// import { Button } from "./components/atoms/button";
import { Route, Routes } from "react-router";
import { Home, Login, Register } from "@/components/pages";

function App() {
  return (
    <div className="h-screen bg-gray-800">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
