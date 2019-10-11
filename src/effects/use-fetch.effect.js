import { useEffect, useState } from "react";
import axios from "axios";

import {} from "../redux/posts/posts.actions";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);

  return { data, error };
};

export default useFetch;
