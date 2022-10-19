import { useState, useEffect } from "react";

const useFetch = (url, initalData, dependeices = []) => {
  const [data, setData] = useState(initalData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) setError(true);
        else setData(res);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, dependeices);

  return { data, loading, error };
};
export default useFetch;
