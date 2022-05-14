import { useState, useEffect } from "react";
const useFetch = (api) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(api)
          .then((res) => res.json())
          .then((data) => {
            setdata(data);
          });
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [api]);

  return data;
};
export default useFetch;
