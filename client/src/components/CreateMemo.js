import React from "react";

function CreateMemo({
  type,
  city,
  country,
  timedate,
  timezone,
  crisisPotential
}) {
  const [memos, setMemos] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  async function fetchMemos() {
    try {
      setLoading(true);
      const response = await fetch(`/api/memos?type=${type}`);
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

    replacedMemo = stringified.replace(/TIMEDATE/g, timedate);
    replacedMemo = replacedMemo.replace("COUNTRY", country);
    replacedMemo = replacedMemo.replace("CITY", city);
    replacedMemo = replacedMemo.replace("TIMEZONE", timezone);
    replacedMemo = replacedMemo.replace("TYPE", type);
    replacedMemo = replacedMemo.replace("CRISISPOTENTIAL", crisisPotential);

    // advanced function but not in use, missing quotations in object?
    // const replacedMemoDetails = [{ TIMEDATE: timedate }, { TYPE: type }];
    // replacedMemoDetails.forEach(memoDetail => {
    //   const [key, value] = Object.entries(memoDetail);
    //   replacedMemo = replacedMemo.replace(new RegExp(key, "g"), value);
    // });

    return (
      <>
        <h4>{currentMemo.headline}</h4>
        <h5>{currentMemo.subline}</h5>
        <textarea>{replacedMemo}</textarea>
      </>
    );
  }
}

export default CreateMemo;
