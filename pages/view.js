import React, { useState, useEffect } from 'react';
import Card from '../components/Card'; // Assuming you have a Card component
import { useRouter } from 'next/router';
import {useTodo,TodoContext,TodoProvider} from '../context/todocontext'

const View = ({children}) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterPriority, setFilterPriority] = useState('');
  const [tasks, setTasks] = useState([]);
  const {updateTodo,deleteTodo}=useTodo();

  useEffect(() => {
    // Fetch tasks from local storage when the component mounts
    const storedTasks = JSON.parse(localStorage.getItem('todos')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    // Save updated tasks to local storage whenever tasks state changes
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    console.log(updatedTask);
  };
  

  const updateTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    const titleMatches = task.title.toLowerCase().includes(searchTerm.toLowerCase());
    const statusMatches = filterStatus === '' || task.status === filterStatus;
    const priorityMatches = filterPriority === '' || task.priority === filterPriority;
    return titleMatches && statusMatches && priorityMatches;
  });

  return (
    <div style={{backgroundColor:"#B2C8BA",height:"100vh"}}>
      <h1 style={{color:"#4F6F52",fontFamily:"Papyrus",fontWeight:"bold",fontSize:"1.5rem",paddingLeft:"2rem",paddingTop:"4rem"}}>Todo List </h1>

      {/* Search Bar */}
      <div style={{display:"flex",flexDirection:"row",paddingLeft:"2rem" ,paddingTop:"1rem"}}>
      <input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{width:"50rem"}}
      />

      {/* Status Filter */}
      <select
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      style={{marginLeft:"2rem",marginRight:"2rem"}}>
        <option value="">Filter by Status</option>
        <option value="in progress">In Progress</option>
        <option value="done">Done</option>
        <option value="not yet started">Not Yet Started</option>
      </select>

      {/* Priority Filter */}
      <select
        value={filterPriority}
        onChange={(e) => setFilterPriority(e.target.value)}
      >
        <option value="">Filter by Priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
  </div>
      {/* Display Tasks *   onDelete={() => deleteTask(task.id)}*   onUpdate={(updatedTask) => updateTask(task.id, updatedTask)}*/}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredTasks.map((task) => (
          <Card
            key={task.id}
        
            title={task.title}
            description={task.description}
            priority={task.priority}
            status={task.status}
            onDelete={() => deleteTask(task.id)}
            onUpdate={(updatedTask) => updateTask(task.id, updatedTask)}
           
          />
        ))}
      </div>
    </div>
  );
};

export default View;