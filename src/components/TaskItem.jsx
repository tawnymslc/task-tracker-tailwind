export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between p-2 border-b">
      <div
        onClick={onToggle}
        className={`cursor-pointer flex-1 ${task.completed ? 'line-through text-gray-400' : ''}`}
      >
        {task.text}
      </div>
      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-700 font-bold ml-4"
      >
        ✕
      </button>
    </li>
  );
}
