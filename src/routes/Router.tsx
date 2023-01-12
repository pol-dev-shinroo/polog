import { Routes, Route } from "react-router-dom";
import { Main, Personal } from "src/routes/components";

const Router = () => {
  return (
    <Routes>
      <Route path="/*" element={<Main />} />
      <Route path="/personal/*" element={<Personal />} />
    </Routes>
  );
};

export default Router;
