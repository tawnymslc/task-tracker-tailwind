'use client';

import { useState } from 'react';
import TaskItem from '@/components/TaskItem';

export default function TaskTracker() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-4 text-center">Task Tracker</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 p-2 border border-gray-300 rounded"
          type="text"
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={() => toggleTask(task.id)}
            onDelete={() => deleteTask(task.id)}
          />
        ))}
      </ul>
    </div>
  );
}
