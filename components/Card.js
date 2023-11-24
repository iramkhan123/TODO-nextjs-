// components/Card.js
'use client'
import React, { useState } from 'react';

import {useTodo} from '../context/todocontext'

const Card = ({ title, description, priority, status,onDelete,onUpdate}) => {
  console.log(id);
  console.log(title);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [updatedPriority,setUpdatedPriority]=useState(priority);
  const [updatedStatus,setUpdatedStatus]=useState(status);
  const [modal,setModal] =useState(false);
  const {deleteTodo,updateTodo}=useTodo();
  const handleUpdate = () => {

    const updatedTask = {
      title: updatedTitle,
      description: updatedDescription,
      priority:updatedPriority,
      status:updatedStatus,
    };

    onUpdate(updatedTask)
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
    <h1>hey</h1>
      {isEditing ? (
        <>
        <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            className="mb-2 p-2 border rounded w-full"
          />
          <textarea
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
            className="mb-2 p-2 border rounded w-full"
          />
           <input
            type="text"
            value={updatedPriority}
            onChange={(e) => setUpdatedPriority(e.target.value)}
            className="mb-2 p-2 border rounded w-full"
          />
           <input
            type="text"
            value={updatedStatus}
            onChange={(e) => setUpdatedStatus(e.target.value)}
            className="mb-2 p-2 border rounded w-full"
          />
          <div className="flex justify-end">
            <button
              onClick={handleUpdate}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Update
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700 mb-2">{description}</p>
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-600">Priority: {priority}</p>
              <p className="text-sm text-gray-600">Status: {status}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsEditing(true)}
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
        </>
      )}
    </div>
  );
};

export default Card;
