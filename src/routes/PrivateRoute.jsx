import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { currentUser, isLoading } = useAuth();

  if (isLoading) {
    return <h1 className="font-bold my-52 text-center text-4xl">Loading...</h1>; // Replace with your own loading component here.
  }

  console.log(isLoading);
  if (!currentUser) {
    return <Navigate to="/login" replace="true" />;
  }
  return children;
};

export default PrivateRoute;
