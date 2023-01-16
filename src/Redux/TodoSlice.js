import { createSlice } from "@reduxjs/toolkit";



const TodoSlice = createSlice({
    name :'Todo',
    initialState:{
        Todos:[{
            id:Math.random(),
            task:'',
            isDone:false
        }],
        Filter:'All'
    },
    reducers:{
        AddTodo:(state,action)=>{
            state.Todos.push(action.payload)
        },
        deleteTodo:(state,action)=>{
           const deleted= state.Todos.filter(el=>el.id !==action.payload)
           state.Todos = deleted
        },
        ToggleTodo:(state,action)=>{
            state.Todos.map(el=>(el.id==action.payload)?el.isDone=!el.isDone : el.isDone)
        },
        FilterbyDone:(state)=>{
           state.Filter='Done'
        },
        FilterbyUnDone:(state)=>{
            state.Filter='UnDone'
        },
        FilterbyAll:(state)=>{
            state.Filter='All'
        },
        update :(state,{type,payload})=>{
            state.Todos.map(el=>(el.id==payload.id)?el.task=payload.task :el.task)
        }
    }
})
export default TodoSlice.reducer
export const {AddTodo,deleteTodo,ToggleTodo,FilterbyAll,FilterbyUnDone,FilterbyDone,update}=TodoSlice.actions