import React from "react";

function useFetch(url) {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function doFetch() {
      const response = await fetch(url);
      const newData = await response.json();
      setData(newData);
    }

    doFetch();
  }, []);

  return data;
}

export default useFetch;
