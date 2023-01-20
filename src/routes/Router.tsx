import { Routes, Route } from "react-router-dom";
import { WriteFinal } from "src/pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/*" element={<WriteFinal />} />
      <Route path="/write" element={<WriteFinal />} />
    </Routes>
  );
};

export default Router;
