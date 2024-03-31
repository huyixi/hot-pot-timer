'use client'

import CountdownTimer from "@/components/CountdownTimer"
import TimerButton from "@/components/TimerButton";
import TimerForm from "@/components/Timerform";

import React, { useState, useEffect } from 'react';
export default function App() {
  const [timers, setTimers] = useState([]);

  const addTimer = (name, seconds) => {
    setTimers([...timers, { name, duration: seconds }]);
  };

  return (
    <div className="container mx-auto p-4">

      {timers.map((timer, index) => (
        <CountdownTimer key={index} name={timer.name} duration={timer.duration} />
      ))}

      <div className="flex space-x-2 mb-4">
        <TimerButton name={'毛肚'} seconds={15} addTimer={addTimer} bgColor="bg-blue-500"></TimerButton>
        <TimerButton name={'牛肉'} seconds={10} addTimer={addTimer} bgColor="bg-blue-500"></TimerButton>
        <TimerButton name={'菌菇'} seconds={2} addTimer={addTimer} bgColor="bg-blue-500"></TimerButton>
      </div>
      <TimerForm addTimer={addTimer} />
    </div>
  );
}
