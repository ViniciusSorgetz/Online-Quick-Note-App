import { useEffect } from "react";

async function fetchData() {
  const response = await fetch("api/v1/status");
  const responseBody = await response.json();
  console.log(responseBody.message);
}

export default function Note() {
  useEffect(() => {
    fetchData();
  });

  return <h1>Salve</h1>;
}
