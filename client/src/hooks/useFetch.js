import React from "react";

function useFetch(url) {
  const [status, setStatus] = React.useState(false);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      setStatus(response.status);
      const newData = await response.json();

      setData(newData);
    }

    fetchData();
  }, [url]);

  return { data, status };
}

export default useFetch;
