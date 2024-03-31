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
    <div className="h-screen grid grid-rows-12 gap-4 mx-auto p-4">

      <div className="row-span-full col-span-full mb-auto">
        {timers.map((timer, index) => (
          <CountdownTimer key={index} name={timer.name} duration={timer.duration} />
        ))}

      </div>

      <div className="flex space-x-2 mb-4 row-start-10 col-span-full ">
        <TimerButton name={'毛肚'} seconds={15} addTimer={addTimer} bgColor="bg-blue-500"></TimerButton>
        <TimerButton name={'牛肉'} seconds={10} addTimer={addTimer} bgColor="bg-blue-500"></TimerButton>
        <TimerButton name={'菌菇'} seconds={2} addTimer={addTimer} bgColor="bg-blue-500"></TimerButton>
      </div>
      <TimerForm addTimer={addTimer} className='row-start-12 col-span-full' />
    </div>
  );
}
