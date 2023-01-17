import { useNavigate, useLocation } from "react-router-dom";

type TRouter = "/" | "write";

const useRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (target: TRouter) => {
    navigate(target);
  };

  return { location, handleNavigate };
};

export default useRouter;
