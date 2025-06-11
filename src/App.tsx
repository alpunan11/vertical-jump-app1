import React, { useState } from 'react';

export default function App() {
  const [completed, setCompleted] = useState<string[]>([]);
  const toggleComplete = (exercise: string) => {
    setCompleted(prev =>
      prev.includes(exercise)
        ? prev.filter(e => e !== exercise)
        : [...prev, exercise]
    );
  };

  const days = {
    Monday: ['Squat Jumps', 'Plank', 'High Knees'],
    Tuesday: ['Lunges', 'Wall Sit', 'Single Leg Hops'],
    Wednesday: ['Rest'],
    Thursday: ['Tuck Jumps', 'Side Plank', 'Calf Raises'],
    Friday: ['Box Jumps', 'Mountain Climbers', 'Burpees'],
    Saturday: ['Broad Jumps', 'Bird Dogs', 'Glute Bridge'],
    Sunday: ['Rest']
  };

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">📆 Today is {today}</h1>
      {Object.entries(days).map(([day, exercises]) => (
        <div key={day} className="mb-4 p-4 bg-white rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-indigo-700">{day}</h2>
          {exercises.map((ex, i) => (
            <label key={i} className="block mt-2">
              <input
                type="checkbox"
                className="mr-2"
                checked={completed.includes(`${day}-${ex}`)}
                onChange={() => toggleComplete(`${day}-${ex}`)}
              />
              {ex}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
}
