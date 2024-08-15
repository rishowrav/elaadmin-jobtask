import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { currentUser, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <h1 className="font-bold my-52 text-center text-4xl">Loading...</h1>; // Replace with your own loading component here.
  }

  if (!currentUser) {
    return <Navigate to="/login" state={location?.pathname} replace="true" />;
  }

  return children;
};

export default PrivateRoute;
