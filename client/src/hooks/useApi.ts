import { useCallback, useState } from "react";

export const useApi = <T>(forceLoad = false) => {
  const [loading, setLoading] = useState<boolean>(forceLoad);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fetch = useCallback(
    (service) => {
      const execFetch = async () => {
        try {
          setLoading(true);
          setError(null);

          const res = await service;
          const data = await res.json();

          if (!res.ok) {
            throw new Error(data.message);
          }

          setData(data);
        } catch (error) {
          console.error("error :>> ", error);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      execFetch();
    },
    [loading]
  );

  return { loading, data, error, fetch };
};
