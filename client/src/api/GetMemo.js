export default async function GetMemo(type) {
  const response = await fetch("/api/memo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(type)
  });

  const memo = await response.json();
  return memo;
}
