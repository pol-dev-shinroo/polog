import { Route, Routes } from "react-router-dom";
import {
  TrendToday,
  TrendWeek,
  TrendMonth,
  TrendAll,
  New,
} from "src/pages/main";

const Main = () => {
  return (
    <Routes>
      {/* trending - 1) all */}
      <Route path="/" element={<TrendAll />} />
      {/* trending - 1) today */}
      <Route path="/today" element={<TrendToday />} />
      {/* trending - 1) week */}
      <Route path="/week" element={<TrendWeek />} />
      {/* trending - 1) month */}
      <Route path="/month" element={<TrendMonth />} />
      {/* new */}
      <Route path="/new" element={<New />} />
    </Routes>
  );
};

export default Main;
