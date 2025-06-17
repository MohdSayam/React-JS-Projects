import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((res) => setData(res.rates || {}))
      .catch((error) => {
        console.error("Fetch error:", error);
        setData({});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
