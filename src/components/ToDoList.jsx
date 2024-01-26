import React, { useState, useCallback } from "react"
import ToDoitem from "./ToDoitem"
import {Column, Column1, Column2, Decor,Decor1, Decor2, Form, ListContainer, Title } from '../components/styled'


const ToDoList = () => {
  const [inputValue, setInputValue] = useState("")
  const [taskList, setTaskList] = useState([
    { id: 1, task: "Exercise", status: "todo" },
    { id: 2, task: "Study", status: "todo" }
    
  ]
  )
  const taskCount = (status) => {
    return taskList.filter((task) => task.status === status).length
  }
  
  const onChange = (event) => {
    setInputValue(event.target.value)
  }

  const addTask = (event) => {
    event.preventDefault()

    const newTask = {
      id: taskList.length + 1,
      task: inputValue,
      status: "todo"
    }

    setTaskList((prevTaskList) => [...prevTaskList, newTask])
    setInputValue("")
  }

  const updateStatus = useCallback((id, newStatus) => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    )
  }, [])

  const removeTask = useCallback((id) => {
    setTaskList((prevTaskList) => prevTaskList.filter((task) => task.id !== id))
  }, [])

  return (
    <div>
      <Title>To Do List</Title>
        <Form onSubmit={addTask}>
        <label htmlFor="taskInput">Task:</label>
        <input
          type="text"
          id="taskInput"
          onChange={onChange}
          value={inputValue}
          aria-label="Task input"
        />
        <button type="submit">Add Task</button>
        </Form>
    <ListContainer>

      <Column>
        <h4>To Do<p>{taskCount("todo")}</p>
</h4>
        <Decor></Decor>

        {taskList
          .filter((task) => task.status === "todo")
          .map((task, index) => (
            <ToDoitem key={`todo-${task.id}`} task={task} index={index} updateStatus={updateStatus} removeTask={removeTask} />
          ))}
      </Column>

      <Column1>
        <h4>In Progress<p>{taskCount("inProgress")}</p></h4>
        <Decor1></Decor1>

        {taskList
          .filter((task) => task.status === "inProgress")
          .map((task, index) => (
            <ToDoitem key={`inProgress-${task.id}`} task={task} index={index} updateStatus={updateStatus} removeTask={removeTask} />
          ))}
      </Column1>

      <Column2>
        <h4>Done<p>{taskCount("done")}</p></h4>
        <Decor2></Decor2>

        {taskList
          .filter((task) => task.status === "done")
          .map((task, index) => (
            <ToDoitem key={`done-${task.id}`} task={task} index={index} updateStatus={updateStatus} removeTask={removeTask} />
          ))}
      </Column2>
    </ListContainer>
    </div>
  )
}


export default ToDoList