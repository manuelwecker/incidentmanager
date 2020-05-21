import React from "react";

function useFetch(url) {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const newData = await response.json();

      setData(newData);
    }

    fetchData();
  }, [url]);

  return data;
}

export default useFetch;
