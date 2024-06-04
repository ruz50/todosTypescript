import { createSlice } from "@reduxjs/toolkit";

export type TodosType = {
    id: number;
    title: string;
    isDone: boolean;
  };

const initialState:TodosState = {
    text:'',
    todos:[]

} 
type TodosState = {
    text:string,
    todos:Array<TodosType>
}

const todosSlice = createSlice({
    name:'todosSlice',
    initialState:initialState,
    reducers:{
        changeText(state,action){
            state.text = action.payload
        },
        add (state){
            state.todos = [...state.todos,{title:state.text, id:Date.now(), isDone:false}]
        },
        del(state,action){
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        checked(state, action) {
            state.todos = state.todos.map(todo => 
                todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
            );
        }
    }
})


export const {changeText} = todosSlice.actions
export const {add} = todosSlice.actions
export const {del} = todosSlice.actions
export const {checked} = todosSlice.actions
export default todosSlice.reducer