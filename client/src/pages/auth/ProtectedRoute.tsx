/* eslint-disable no-constant-condition */
import { useEffect} from "react";
import { Navigate } from "react-router-dom";
import axiosInstance from "../../config/axiosConfig";

const ProtectedRoute = ({ children }) => {
  useEffect(function () {
    async function checkUserSession() {
      try {
        const user = await axiosInstance.get("/auth/logout", {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (user) {
          return <Navigate to="/login" />;
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    checkUserSession();
  }, []);

  return children;
};

export default ProtectedRoute;
