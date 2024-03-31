// TimerForm.jsx
import React, { useState } from 'react';

function TimerForm({ addTimer }) {
  const [timerName, setTimerName] = useState('');
  const [timerSeconds, setTimerSeconds] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTimer(timerName, parseInt(timerSeconds, 10));
    setTimerName('');
    setTimerSeconds('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 text-black">
      <input
        type="text"
        placeholder="菜品名"
        value={timerName}
        onChange={(e) => setTimerName(e.target.value)}
        className="px-4 py-2 rounded bg-gray-200"
        required
      />
      <input
        type="number"
        placeholder="涮多久"
        value={timerSeconds}
        onChange={(e) => setTimerSeconds(e.target.value)}
        className="px-4 py-2 rounded bg-gray-200"
        required
      />
      <button type="submit" className="px-4 py-2 rounded bg-blue-500 text-white">
        下锅
      </button>
    </form>
  );
}

export default TimerForm;
