import { createSlice } from "@reduxjs/toolkit";

// this is initial state of data.
const initialState={
    value:[]
};

// creating a slice which manages actions for reducer.
export const todoSlice = createSlice({
    name:'todo',
    initialState,
    
    reducers:{
        add:(state, action)=>{
            state.value.push(action.payload);
            console.log(state.value);
        },
        update:(state, action)=>{
            console.log(action.payload);
            state.value.push(action.payload);
        }
    }
});

// a gateway for listening to data.
export const todoSelector = (state)=> state.todo.value;

// for components to access actions to be able to distpacth them
export const {add, update} = todoSlice.actions;

// for store.
export default todoSlice.reducer;