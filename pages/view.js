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
  const {todos,updateTodo,deleteTodo}=useTodo();

  useEffect(() => {
    // Fetch tasks from local storage when the component mounts
   
    const storedTasks = JSON.parse(localStorage.getItem('todos')) || [];
    console.log("local storage",storedTasks)

  
    setTasks(todos);
    console.log("from context api",todos);
  
    

  }, [todos]);

  /*useEffect(() => {
    // Save updated tasks to local storage whenever tasks state changes
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [storedTasks]);
  */
  const deleteTask = (taskId) => {

    /*const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    console.log(updatedTask);*/
  
    deleteTodo(taskId);
    console.log("after delete the context",todos)
  };
  

  const updateTask = (taskId, updatedTask) => {
    updateTodo(taskId,updatedTask);
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
        style={{width:"50rem",borderRadius:"20px",backgroundColor:"#EBF3E8"}}
      />

      {/* Status Filter */}
      <select
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      style={{marginLeft:"2rem",marginRight:"2rem",backgroundColor:"#EBF3E8",borderRadius:"20px"}}>
        <option value="">Filter by Status</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
        <option value="Not Yet Started">Not Yet Started</option>
      </select>

      {/* Priority Filter */}
      <select
        value={filterPriority}
        onChange={(e) => setFilterPriority(e.target.value)}
        style={{backgroundColor:"#EBF3E8",borderRadius:"20px"}}
      >
        <option value="">Filter by Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
  </div>
      {/* Display Tasks *   onDelete={() => deleteTask(task.id)}*   onUpdate={(updatedTask) => updateTask(task.id, updatedTask)}*/}
      <div style={{ display: 'flex', flexWrap: 'wrap' ,paddingLeft:"2rem",paddingRight:"2rem"}}>
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