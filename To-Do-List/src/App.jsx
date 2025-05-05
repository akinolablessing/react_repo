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
const [completedTodos,setCompletedTodos] = useState([]);
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
const handleDeleteTodo =(index)=> {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index);

    localStorage.setItem("todolist", JSON.stringify(reducedTodo));
    setTodos(reducedTodo)
}
const handleComplete =(index)=>{
    let now = new Date();
    let dd = now.getDate()
    let mm = now.getMonth() +1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completedOn = dd + '_' +mm+ '_' + yyyy + 'at' +h+ ':' +m+ ':' +s;

    let filterItem = {
        ...allTodos[index],
        completedOn:completedOn
    }
    let updatedCompletedArr =[...completedTodos];
    updatedCompletedArr.push(filterItem);
    setCompletedTodos(updatedCompletedArr);

}
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
                  {isCompletedScreen === false && allTodos.map((item,index)=>{
                      return(
                          <div className="todo-list-item" key={index}>
                              <div>
                                  <h3>{item.title}</h3>
                                  <p>{item.description}</p>
                              </div>
                              <div>
                                  <MdDelete className="icon" onClick={()=>handleDeleteTodo(index)}
                                  title="Delete?"/>
                                  <BsCheckLg className="check-icon" onClick={()=>handleComplete(index)} title="Completed?"/>

                              </div>
                          </div>
                      )
                  })}
                  {isCompletedScreen === true && completedTodos.map((item,index)=>{
                      return(
                          <div className="todo-list-item" key={index}>
                              <div>
                                  <h3>{item.title}</h3>
                                  <p>{item.description}</p>
                                  <p><small>Completed on: {item.completedOn}</small></p>
                              </div>
                              <div>
                                  <MdDelete className="icon" onClick={()=>handleDeleteTodo(index)}
                                            title="Delete?"/>
                                  {/*<BsCheckLg className="check-icon" onClick={()=>handleComplete(index)} title="Completed?"/>*/}

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
