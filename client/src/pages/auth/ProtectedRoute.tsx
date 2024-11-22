import { useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { AUTH } from "../../services/methods";

const ProtectedRoute = ({ children }) => {
  const { data, error, loading, fetch } = useApi();

  useEffect(
    function () {
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: "Noah",
          password: "Noah1234",
        }),
        credentials: "include",
      };
      fetch(AUTH("http://localhost:8000/api/v1/auth/login", config));
    },
    []
  );

  console.log(data);
  return children;
};

export default ProtectedRoute;
