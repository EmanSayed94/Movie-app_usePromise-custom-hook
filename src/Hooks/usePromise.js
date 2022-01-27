import { useEffect, useState } from "react";

const usePromise = (promiseFn) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await promiseFn();
        setData(response.data);
        setLoading(false);
        setError(null);
      } catch (err) {
        setError(err?.response?.data?.status_message);
        setLoading(false);
        setData(undefined);
      }
    }

    fetchData();
  }, [promiseFn]);
  return { data, loading, error };
};

export default usePromise;
