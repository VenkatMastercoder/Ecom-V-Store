import { useEffect, useState } from "react";

const useFetchProductDetailsData = (productId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchDataByProductID(productId);
  }, [productId]);

  const fetchDataByProductID = async (id) => {
    try {
      setIsLoading(true);
      console.log(id);
      const res = await fetch("https://dummyjson.com/products/" + id);
      const data = await res.json();
      setData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data };
};

export default useFetchProductDetailsData