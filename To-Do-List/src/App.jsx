import React, {useEffect, useState} from 'react';
import reactLogo from './assets/react.svg'
import { MdDelete } from "react-icons/md";
import './App.css'
import {BsCheckLg} from "react-icons/bs";

function App() {
const [isCompletedScreen,setIsCompletedScreen] = useState(false);
const [allTodos,setTodos] = useState([]);
const [newTitle,setNewTitle] = useState("");
const [newDescription,setNewDescription] = useState("");
const handleAddTodo =()=>{
let newTodoItem ={
    title:newTitle,
    description:newDescription
}
let updatedTodoArr= [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem("todolist",JSON.stringify(updatedTodoArr))
};

    useEffect(() => {
        let savedTodo =JSON.parse(localStorage.getItem("todolist"));
        if(savedTodo){
            setTodos(savedTodo);
        }
    }, []);
  return (
    <>
      <div className="App">
          <h1>My Todos</h1>

          <div className="todo-wrapper">
            <div className="todo-input">
                <div className="todo-input-item">
                    <label>Title</label>
                    <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder="what's the task title?" />
                </div>
                <div className="todo-input-item">
                    <label>Description</label>
                    <input type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder="what's the task description?" />
                </div>
                <div className="todo-input-item">
                    <button type="button" onClick={handleAddTodo} className="primaryBtn">Add</button>
                </div>
            </div>
              <div className="buttonArea">
                <button className={`isCompletedScreen  ${isCompletedScreen === false && "active"}`}
                        onClick={()=>setIsCompletedScreen(false)}>Todo</button>
                  <button className={`isCompletedScreen  ${isCompletedScreen === true && "active"}`}
                          onClick={()=>setIsCompletedScreen(true)}>Completed</button>
              </div>

              <div className="todo-list">
                  {allTodos.map((item,index)=>{
                      return(
                          <div className="todo-list-item" key={index}>
                              <div>
                                  <h3>{item.title}</h3>
                                  <p>{item.description}</p>
                              </div>
                              <div>
                                  <MdDelete className="icon"/>
                                  <BsCheckLg className="check-icon"/>

                              </div>
                          </div>
                      )
                  })}



              </div>
          </div>
      </div>
    </>
  );
}

export default App
