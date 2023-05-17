import { useState, useEffect } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    //url: `https://httpbin.org/get/${endpoint}`,
    url: `https://jsonplaceholder.typicode.com/todos/1`,
    headers: {},
    //params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      console.log("about to make request")
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`).then(res => res.json())
      console.log(response)

      setData(response);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log("error in auth service get request")
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;