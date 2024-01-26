import React from 'react'
import { ListItem, PlanBox, Text } from  '../components/styled';



const ToDoitem = ({ task, index, updateStatus, removeTask }) => {
  console.log(`${task.id}`)

  return (
        <ListItem $index={index}>
      {/* <p color={index === 5 ? 'red' : 'gray'}>{task.task} */}

      <Text color={index === 2 ? 'gray' : 'red'}>
        
        {task.task}
      
      </Text>

            {/* </p> */}


<PlanBox >
       {task.status === "todo" && (
          <>
            <button onClick={() => removeTask(task.id)}>Delete</button>
            <button onClick={() => updateStatus(task.id, "done")}>I Did it</button>
            <button onClick={() => updateStatus(task.id, "inProgress")}>In Progress</button>
          </>
        )}
        {task.status === "inProgress" && (
          <>
            <button onClick={() => removeTask(task.id)}>Delete</button>
            <button onClick={() => updateStatus(task.id, "todo")}>Start Over</button>
            <button onClick={() => updateStatus(task.id, "done")}>I Did it</button>
          </>
        )}
        {task.status === "done" && (
          <>
            <button onClick={() => removeTask(task.id)}>Delete</button>
            <button onClick={() => updateStatus(task.id, "todo")}>Start Over</button>
            <button onClick={() => updateStatus(task.id, "inProgress")}>In Progress</button>
          </>
        )}
</PlanBox>  
</ListItem>
  )
}

export default React.memo(ToDoitem)