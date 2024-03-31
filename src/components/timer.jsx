'use client'

import React, { useState, useEffect } from 'react';

export default function Timer({ duration }) {
  const [seconds, setSeconds] = useState(duration);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds(seconds - 1);
        setPercentage(((duration - seconds + 1) / duration) * 100);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [seconds, duration]);

  return (
    <div>
      <div className="w-full bg-gray-200 h-5 rounded">
        <div className="h-full bg-green-500 rounded" style={{ width: `${percentage}%` }}></div>
      </div>
      <p className="text-black"> {seconds} 秒后可以吃~ </p>
    </div>
  );
}
