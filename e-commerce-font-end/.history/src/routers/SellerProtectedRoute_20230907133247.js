import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";

const SellerProtectedRoute = ({ children }) => {
  const { isLoading, isSeller } = useSelector((state) => state.seller);
  if (isLoading === true) {
    return <InfinitySpin width="200" color="#0a1d37" />;
  } else {
    if (!isSeller) {
      return <Navigate to={`/shop-login`} replace />;
    }
    return children;
  }
};

export default SellerProtectedRoute;
