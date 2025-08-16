import React, { useState, useEffect } from "react";

export default function TimeDisplay() {
  const [now, setNow] = useState(new Date());
  const [initialRenderTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const fullDateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const shortTimeOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  return (
    <>
      <h3 className="md:text-3xl text-lg font-bold">
        {now.toLocaleTimeString()}
      </h3>
      <h3 className="md:text-sm text-blue-600 text-xs font-medium text-right">
        {now.toLocaleDateString(undefined, fullDateOptions)}
      </h3>
    </>
  );
}