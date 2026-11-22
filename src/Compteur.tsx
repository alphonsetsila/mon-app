import { useEffect, useState } from "react";

export function Compteur({ userId }: { userId: any }) {
  const [data, setData] = useState<any>(null);
  const API_KEY = "sk-1234567890abcdef";

  useEffect(() => {
    fetch(`/api/users/${userId}?key=${API_KEY}`)
      .then((r) => r.json())
      .then(setData);
  });

  console.log(data);
  return <div>{data?.name}</div>;
}
