'use client';
import React, { useState,useContext } from "react";

import {Modal,Alert,Navbar,Button,TextInput,Card,Label,Textarea,Dropdown} from "flowbite-react";
import Link from 'next/link';
import {TodoProvider,TodoContext,useTodo} from '../context/todocontext';
import Image from 'next/image'
import bg from '../asset/two.jpg';
import {usePathname} from 'next/navigation'



function HomePage() {
   // const {handlePriority, handleStatus, handleTask, handleDescription,handleTitle} = useContext(Context);
  
   const [priority,setPriority]=useState('');

   const [status,setStatus]=useState('');
   const [title,setTitle]=useState('');
   const [description,setDescription]=useState("");
   const [isOpen,setOpen]=useState(false);
  
   const {todos,addTodo}=useTodo();

   let curr=usePathname();
   const handlePriority=(e)=>{
    setPriority(e);
   }
   const handleStatus=(e)=>{
    setStatus(e);
   }
   const handleTask=(e)=>{
    e.preventDefault();
   if(title===''|| description===''|| priority===''|| status==='' ){
    alert("Please provide the details");
    return;
   }
   

    addTodo({title,description,status,priority});
   
    setPriority('');
    setStatus('');
    setTitle('');
    setDescription('');
    setOpen(false)

   }
   //
    return (
       
      
    
      <div style={{height:"100vh", backgroundColor:"#B2C8BA"}}>
     
      <div style={{paddingLeft:"32rem",paddingTop:"12rem"}}>
         <Button style={{height:"5rem",width:"12rem", backgroundColor:"#4F6F52",fontFamily:"Papyrus",fontWeight:"bold",fontSize:"1.8rem"}} onClick={() => setOpen(true)} size="xl" type="button">Add New Task</Button>
        
         <div> 
         <Modal show={isOpen} onClose={() => setOpen(false)} >
    <Modal.Header style={{backgroundColor:"#B2C8BA",fontFamily:"Papyrus"}}>
    <div className="flex items-center  p-4 md:p-5 justify-between" >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white" style={{color:"#4F6F52"}}>
              New Task
          </h3>
          
      </div>
  </Modal.Header>
    <Modal.Body style={{backgroundColor:"#B2C8BA"}}>
    <form className="p-1 md:p-1" >
          <div className="grid gap-4 mb-4 grid-cols-2" style={{backgroundColor:"#B2C8BA"}}>
              <div  className="col-span-2" >
                  <Label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" style={{fontFamily:"Papyrus",color:"#4F6F52"}}>Title</Label>
                  <TextInput type="text" name="name" id="name"  placeholder="Type task title" value={title} onChange={(event) => setTitle(event.target.value)}
          required style={{backgroundColor:"#EBF3E8",color:"#4F6F52",fontFamily:"Papyrus"}}/>
              </div>
              
              
              <div className="col-span-2">
                  <Label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" style={{fontFamily:"Papyrus",color:"#4F6F52"}}>Description</Label>
                  <Textarea id="description" required rows={4} placeholder="Write task description here" value={description} onChange={(event) => setDescription(event.target.value)}
          required style={{backgroundColor:"#EBF3E8",color:"#4F6F52",fontFamily:"Papyrus"}}></Textarea>                    
              </div>

              <div >
                  <Label htmlFor="priority" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" style={{fontFamily:"Papyrus",color:"#4F6F52"}}>Priority</Label>
                  <select id="priority" value={priority} onChange={(e)=>handlePriority(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  style={{backgroundColor:"#EBF3E8",color:"#4F6F52",fontFamily:"Papyrus"}}>
                      <option selected="">Choose One...</option>
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                  
                  </select>
              </div>
              <div >
                  <Label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" style={{fontFamily:"Papyrus",color:"#4F6F52"}}>Status</Label>
                  
                  <select id="status" value={status} onChange={(e)=>handleStatus(e.target.value)} 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  style={{backgroundColor:"#EBF3E8",color:"#4F6F52",fontFamily:"Papyrus"}}>
                      <option selected="">Choose One...</option>
                      <option value="Not Yet Started">Not Yet Started</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Done">Done</option>
                  
                  </select>
              </div>
          </div>
          
      </form>
    </Modal.Body>
    <Modal.Footer style={{paddingLeft:"2rem",display:"flex",backgroundColor:"#B2C8BA"}}>
      <Button style={{backgroundColor:"#4F6F52"}} size="md" type="submit" onClick={handleTask}>Add</Button>
      <Button color="gray"  size="md" onClick={() => setOpen(false)} >
        Cancel
      </Button>
    </Modal.Footer>
  </Modal>
  </div>
       
       
      </div>
      
      </div>
    )
}

export default HomePage