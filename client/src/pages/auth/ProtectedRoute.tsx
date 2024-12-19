/* eslint-disable no-constant-condition */
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axiosInstance from "../../config/axiosConfig";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  useEffect(function () {
    async function checkUserSession() {
      try {
        const res = await axiosInstance.get("/auth/checkSession", {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.status === 200 && res.data.user) {
          console.log(res.data.user);
        } else {
          return navigate("/login");
        }
      } catch (err) {
        if (err.response && err.response.status === 401) {
          navigate("/login");
        } else {
          console.error("Error checking session", err);
        }
      }
    }
    checkUserSession();
  }, []);

  return children;
};

export default ProtectedRoute;
