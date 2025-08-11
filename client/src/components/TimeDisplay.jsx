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
    <div>
      <h3 className="md:text-3xl text-md font-bold text-left">{now.toLocaleTimeString()}</h3>
      <h3 className="md:text-sm text-xs font-medium text-left">
        {now.toLocaleDateString(undefined, fullDateOptions)}
      </h3>
      <h3 className="text-blue-600 font-bold text-sm mb-2 text-left">
        Last Updated:{" "}
        {initialRenderTime.toLocaleTimeString(undefined, shortTimeOptions)}
      </h3>
    </div>
  );
}