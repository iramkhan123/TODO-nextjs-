"use client";
import '../styles/globals.css'
import {Modal,Alert,Navbar,Button,TextInput,Card,Label,Textarea,Select} from "flowbite-react";
import React,{useState,useEffect} from "react";
import '../components/HomePage.css'
import '../components/View.css'
import HomePage from '../components/Home'


import { TodoProvider ,useTodo,useContext} from '../context/todocontext';
export default function App(props) {
  const [todos,setTodos]=useState([]);

  const addTodo=(todo)=>{
    setTodos((prev)=>[...prev,{id:Date.now(),...todo}]);
    console.log(todos);
  }
  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ? todo : prevTodo)))
  }
  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }
  useEffect(()=>{
   const todos= JSON.parse(localStorage.getItem("todos"));

   if(todos && todos.length>0){
      setTodos(todos);
   }
  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo}}>
     
     <HomePage data={todos}/>
    </TodoProvider>
  )
}
