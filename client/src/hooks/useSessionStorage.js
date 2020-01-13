import React from "react";

export default function useSessionStorage(key, defaultValue) {
  let initialValue;
  try {
    const item = sessionStorage.getItem(key);
    // initialValue = JSON.parse(item) || defaultValue;
    initialValue = item || defaultValue;
  } catch (error) {
    initialValue = defaultValue;
  }

  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    // sessionStorage.setItem(key, JSON.stringify(value));
    sessionStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
}
