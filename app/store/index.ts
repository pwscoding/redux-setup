// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './tasks';

export const store = configureStore({
    reducer: {
        tasks: taskSlice,
    },
});

// Define RootState and AppDispatch types for better type inference
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
