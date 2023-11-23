import { useEffect, useState } from "react";

function useCurrency(currency) {
  const [initialData, setInitialData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((data) => setInitialData(data?.[currency]))
      .catch((err) => {
        console.log("ERROR IN API:", err);
      });
  }, [currency]);

  return initialData;
}

export default useCurrency;
