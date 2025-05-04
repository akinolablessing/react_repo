import React,{ useState } from 'react';
import reactLogo from './assets/react.svg'
import { MdDelete } from "react-icons/md";
import './App.css'
import {BsCheckLg} from "react-icons/bs";

function App() {
const [isCompletedScreen,setIsCompletedScreen] = useState(false);

  return (
    <>
      <div className="App">
          <h1>My Todos</h1>

          <div className="todo-wrapper">
            <div className="todo-input">
                <div className="todo-input-item">
                    <label>Title</label>
                    <input type="text" placeholder="what's the task title?" />
                </div>
                <div className="todo-input-item">
                    <label>Description</label>
                    <input type="text" placeholder="what's the task description?" />
                </div>
                <div className="todo-input-item">
                    <button type="button" className="primaryBtn">Add</button>
                </div>
            </div>
              <div className="buttonArea">
                <button className={`isCompletedScreen  ${isCompletedScreen === false && "active"}`}
                        onClick={()=>setIsCompletedScreen(false)}>Todo</button>
                  <button className={`isCompletedScreen  ${isCompletedScreen === true && "active"}`}
                          onClick={()=>setIsCompletedScreen(true)}>Completed</button>
              </div>

              <div className="todo-list">
                <div className="todo-list-item">

                    <h3>Task 1</h3>
                    <p>Description</p>
                </div>
                  <div>
                      <MdDelete className="icon"/>
                      <BsCheckLg className="check-icon"/>

                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

export default App
