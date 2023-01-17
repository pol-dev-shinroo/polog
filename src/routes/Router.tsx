import { Routes, Route } from "react-router-dom";
import { Main } from "src/routes/components";
import Write from "src/pages/Write";

const Router = () => {
  return (
    <Routes>
      <Route path="/*" element={<Main />} />
      <Route path="/write/*" element={<Write />} />
    </Routes>
  );
};

export default Router;
