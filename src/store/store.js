import { configureStore } from "@reduxjs/toolkit";
import tasks from "./reducers/tasks";

export const createStore = () => configureStore({ reducer: { tasks } });

export const store = createStore();
