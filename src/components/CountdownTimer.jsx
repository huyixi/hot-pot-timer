'use client'

import React, { useState, useEffect } from 'react';

export default function Timer({ duration, name }) {
  const [seconds, setSeconds] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-4">
      <div className="w-full bg-gray-200 h-5 rounded">
        <div className="h-full bg-green-500 rounded" style={{ width: `${(100 - (seconds / duration) * 100)}%` }}></div>
      </div>
      <p className="text-white">{name}: {seconds} 秒后可以吃~</p>
    </div>
  );
}
