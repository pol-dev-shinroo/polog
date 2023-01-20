import { Routes, Route } from "react-router-dom";
import { Write } from "src/pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/*" element={<Write />} />
      <Route path="/write" element={<Write />} />
    </Routes>
  );
};

export default Router;
