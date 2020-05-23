export default async function DeleteData(url, id) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(id)
  });
  console.log("delete", response);
}
