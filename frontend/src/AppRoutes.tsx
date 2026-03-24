import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<div>About Page</div>} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;