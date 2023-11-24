// components/Card.js
'use client'
import React, { useState } from 'react';

import {useTodo} from '../context/todocontext'
import {Modal,Alert,Navbar,Button,TextInput,Label,Textarea,Dropdown} from "flowbite-react";
const Card = ({ title, description, priority, status,onDelete,onUpdate}) => {
  
  console.log(title);
  const [isOpen,setOpen] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [updatedPriority,setUpdatedPriority]=useState(priority);
  const [updatedStatus,setUpdatedStatus]=useState(status);
  
  const {deleteTodo,updateTodo}=useTodo();
  const handleUpdate = () => {

    const updatedTask = {
      title: updatedTitle,
      description: updatedDescription,
      priority:updatedPriority,
      status:updatedStatus,
    };

    onUpdate(updatedTask);
    setOpen(false);
  };

  return (
    <div className="shadow-md rounded-md p-5 mb-4" style={{marginRight:"2rem",marginTop:"2rem",backgroundColor:"#EBF3E8",height:"15rem",color:"#4F6F52"}}>
    
      {isOpen ? (
        <>
        <Modal show={isOpen} onClose={() => setOpen(false)} >
    <Modal.Header style={{backgroundColor:"#B2C8BA",fontFamily:"Papyrus"}}>
    <div className="flex items-center  p-4 md:p-5 justify-between" >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white" style={{color:"#4F6F52"}}>
              Update Task
          </h3>
          
      </div>
  </Modal.Header>
    <Modal.Body style={{backgroundColor:"#B2C8BA"}}>
    <form className="p-1 md:p-1" >
          <div className="grid gap-4 mb-4 grid-cols-2" style={{backgroundColor:"#B2C8BA"}}>
              <div  className="col-span-2" >
                  <Label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" style={{fontFamily:"Papyrus",color:"#4F6F52"}}>Title</Label>
                  <TextInput type="text" name="name" id="name"  placeholder={title} value={updatedTitle} onChange={(event) => setUpdatedTitle(event.target.value)}
          required style={{backgroundColor:"#EBF3E8",color:"#4F6F52",fontFamily:"Papyrus"}}/>
              </div>
              
              
              <div className="col-span-2">
                  <Label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" style={{fontFamily:"Papyrus",color:"#4F6F52"}}>Description</Label>
                  <Textarea id="description" required rows={4} placeholder={description} value={updatedDescription} onChange={(event) => setUpdatedDescription(event.target.value)}
          required style={{backgroundColor:"#EBF3E8",color:"#4F6F52",fontFamily:"Papyrus"}}></Textarea>                    
              </div>

              <div >
                  <Label htmlFor="priority" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" style={{fontFamily:"Papyrus",color:"#4F6F52"}}>Priority</Label>
                  <select id="priority" value={updatedPriority} onChange={(e)=>setUpdatedPriority(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  style={{backgroundColor:"#EBF3E8",color:"#4F6F52",fontFamily:"Papyrus"}}>
                      <option selected="">Choose One...</option>
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                  
                  </select>
              </div>
              <div >
                  <Label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" style={{fontFamily:"Papyrus",color:"#4F6F52"}}>Status</Label>
                  
                  <select id="status" value={updatedStatus} onChange={(e)=>setUpdatedStatus(e.target.value)} 
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
      <Button style={{backgroundColor:"#4F6F52"}} size="md" type="submit" onClick={handleUpdate}>Update</Button>
      <Button color="gray"  size="md" onClick={() => setOpen(false)} >
        Cancel
      </Button>
    </Modal.Footer>
  </Modal>
  
        </>
      ) : (
        <div style={{fontFamily:"Papyrus",fontSize:"1.2rem",fontWeight:"bold",color:"#4F6F52",paddingTop:"1rem"}}>
          <h4 className="text-xl font-semibold mb-2">Title :&nbsp;{title}</h4>
          <p className="text-gray-700 mb-2" style={{paddingTop:"0.4rem",color:"#4F6F52"}}>Description :&nbsp; {description}</p>
          {/*<div className="flex justify-between">*/}
            <div style={{display:"flex",flexDirection:"column"}}>
              <p className="text-sm text-gray-600" style={{paddingTop:"0.4rem",color:"#4F6F52"}}>Priority :&nbsp; {priority}</p>
              <p className="text-sm text-gray-600" style={{paddingTop:"0.4rem",color:"#4F6F52"}}>Status :&nbsp;{status}</p>
            </div>
            <div className="flex items-center space-x-2" style={{justifyContent:"space-between",paddingTop:"0.8rem"}}>
              <button
                onClick={() => setOpen(true)}
                className="text-blue-500 hover:text-blue-700 focus:outline-none"
              >
                Edit
              </button>
              <button
                onClick={onDelete}
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                Delete
              </button>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
