// store/tasksSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: string;
  text: string;
  assignedTo: string;
  completed: boolean;
}

interface TasksState {
  tasks: Task[];
  employees: string[];
}

const initialState: TasksState = {
  tasks: [],
  employees: ["Shadab", "Mehtab", "Sajid", "Aman", "Khizar", "Rahul", "Gaurav", "Mehul", "Afroz"], // Employee list
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ text: string; assignedTo: string }>) => {
      const newTask: Task = {
        id: new Date().toISOString(),
        text: action.payload.text,
        assignedTo: action.payload.assignedTo,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    toggleTaskCompletion: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, toggleTaskCompletion, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
