import { useEffect, useState } from "react";

const useFetchProductData = () => {
  const [data, SetData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://dummyjson.com/products"); // Promise
      const data = await res.json();
      SetData(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading };
};

export default useFetchProductData