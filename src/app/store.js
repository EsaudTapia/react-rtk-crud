import { configureStore } from "@reduxjs/toolkit";
import  taskReducer from "../features/task/taskSlice";

//el cofingureStore es una funcion
// que recibe un objeto con la 
//configuracion de nuestro store
//agrupo todos los reducers en un solo objeto
export const store = configureStore({
   reducer: {

        tasks: taskReducer,
    },
});



