//un slice es un objeto que contiene todos los reducers de una entidad
//en este caso el slice de task
//tiene todos los reducers de la entidad task

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Tarea 1",
    description: "Descripción de la tarea 1",
    completed: false
  },
  {
    id: "2",
    title: "Tarea 2",
    description: "Descripción de la tarea 2",
    completed: false
  },
];

//initialState es el estado inicial de la entidad

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);

        },
        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload);
        },
        editTask: (state, action) => {
            const taskToEdit = state.find(task => task.id === action.payload.id);
            taskToEdit.title = action.payload.title;
            taskToEdit.description = action.payload.description;
        }      
      }
});

export const { addTask,deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer; //exporto solo el reducer



