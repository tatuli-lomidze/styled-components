import React, {Component} from "react"
import ToDolist from "./components/ToDoList"

class App extends Component {



  render() {
    console.log("App component is rendering");

    return (
      <ToDolist/>
    )
  }
}

export default App