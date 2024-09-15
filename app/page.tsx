"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";
import TasksList from "./component/TasksList";
import { addTask } from "./store/tasks";

export default function TaskManager() {
  const [taskText, setTaskText] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const { tasks, employees } = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddTask = () => {
    if (taskText.trim() !== "" && selectedEmployee) {
      dispatch(addTask({ text: taskText, assignedTo: selectedEmployee }));
      setTaskText("");
      setSelectedEmployee(""); // Reset after task is added
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Task Manager</h1>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Add a new task"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="mb-4">
          <select
            value={selectedEmployee}
            onChange={(e) => setSelectedEmployee(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="" disabled>Select employee to assign</option>
            {employees.map((employee, index) => (
              <option key={index} value={employee}>
                {employee}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleAddTask}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md transition"
          >
            Add Task
          </button>
        </div>

        <div className="mt-5">
          <TasksList />
        </div>

        {tasks.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No tasks available.</p>
        )}
      </div>
    </div>
  );
}
