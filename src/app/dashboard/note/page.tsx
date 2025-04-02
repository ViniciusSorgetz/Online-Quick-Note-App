"use client";

import { useEffect } from "react";

async function fetchData() {
  const response = await fetch("../api/v1/status");
  const responseBody = await response.json();
  console.log(responseBody.message);
}

export default function Note() {
  useEffect(() => {
    fetchData();
  });

  return <h2 className="text-xl font-bold text-blue-500">Salve</h2>;
}
