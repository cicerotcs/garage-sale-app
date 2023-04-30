import { Navigate } from "react-router-dom";
const ProtectedRouter = ({ children, user }) => {
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};
export default ProtectedRouter;
