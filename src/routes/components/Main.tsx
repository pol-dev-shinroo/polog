import { Route, Routes } from "react-router-dom";
import {
  TrendToday,
  TrendWeek,
  TrendMonth,
  TrendAll,
  New,
  Followers,
  Home,
} from "src/pages/main";
import NotFound from "src/pages/NotFound";

const Main = () => {
  return (
    <Routes>
      {/* followers */}
      <Route path="/" element={<Home />} />
      {/* trending - 1) all */}
      {/* <Route path="/" element={<TrendAll />} /> */}
      {/* trending - 1) today */}
      <Route path="/today" element={<TrendToday />} />
      {/* trending - 1) week */}
      <Route path="/week" element={<TrendWeek />} />
      {/* trending - 1) month */}
      <Route path="/month" element={<TrendMonth />} />
      {/* new */}
      <Route path="/new" element={<New />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Main;
