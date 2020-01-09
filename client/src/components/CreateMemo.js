import React from "react";

function CreateMemo({ type, country, timeDate, timezone }) {
  const [memos, setMemos] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  async function fetchMemos() {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:7070/memos?type=${type}`);
      const newMemo = await response.json();
      setMemos(newMemo);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  React.useEffect(() => {
    fetchMemos();
  }, []);

  const currentMemo = memos[0];

  if (loading) return "Loading...";
  if (error) return `Error: Something went wrong`;
  if (!loading) {
    let stringified = currentMemo.copytext;
    let replacedMemo = stringified;
    // const replacedMemoetails = [{ TIMEDATE: timeDate }, { COUNTRY: country }];
    // replacedMemoetails.forEach(function(key, value) {
    //   replacedMemo = replacedMemo.replace(key, value);
    //   console.log(key);
    //   console.log(value);
    // }, replacedMemoetails);
    replacedMemo = stringified.replace("TIMEDATE", timeDate);
    replacedMemo = replacedMemo.replace("COUNTRY", country);
    replacedMemo = replacedMemo.replace("TIMEZONE", timezone);
    replacedMemo = replacedMemo.replace("TYPE", type);

    return (
      <>
        <h4>{currentMemo.headline}</h4>
        <h5>{currentMemo.subline}</h5>
        {replacedMemo}
      </>
    );
  }
}

export default CreateMemo;
