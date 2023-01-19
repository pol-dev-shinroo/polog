import { Routes, Route } from "react-router-dom";
import { Main } from "src/routes/components";
import WriteFinal from "src/pages/WriteFinal";

const Router = () => {
  return (
    <Routes>
      <Route path="/*" element={<Main />} />
      <Route path="/write" element={<WriteFinal />} />
    </Routes>
  );
};

export default Router;
