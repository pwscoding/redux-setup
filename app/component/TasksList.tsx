import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { removeTask, toggleTaskCompletion } from "../store/tasks";

export default function TasksList() {
    const { tasks } = useSelector((state: RootState) => state.tasks);
    const dispatch = useDispatch<AppDispatch>();

    const handleComplete = (id: string) => {
        dispatch(toggleTaskCompletion(id));
    };

    const handleRemove = (id: string) => {
        dispatch(removeTask(id));
    };

    return (
        <ul className="space-y-2">
            {tasks.map((task) => (
                <li
                    key={task.id}
                    className={`flex cursor-pointer items-center justify-between p-4 border rounded-md ${task.completed ? "bg-green-100 line-through" : "bg-gray-50"
                        }`}
                    onClick={() => handleComplete(task.id)}
                >
                    <div>
                        <p>{task.text}</p>
                        <p className="text-sm text-gray-500">Assigned to: {task.assignedTo}</p>
                    </div>
                    <div className="space-x-2">
                        <button
                            onClick={() => handleRemove(task.id)}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md shadow-md transition"
                        >
                            Remove
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
