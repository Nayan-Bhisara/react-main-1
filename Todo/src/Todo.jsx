import { useState } from "react"

const Todo = () => {

    const [task,setTask] = useState("")
    const [alltask,setAlltask] = useState([])
    const handlesubmit = (event) =>{
        event.preventDefault()
        alltask.map((item) =>{
            if(task === item.task){
                alert("this task is already added")
            }
            return false
        })
        let obj = {
            uid : Date.now(),
            task,
            status : "panding"
        }
        let newrecord = [...alltask,obj]
        setAlltask(newrecord)
        alert("task add")
        setTask("")
    }
    

    const compkleteTodo = (id) =>{
        let updatestatus = alltask.map((com) => {
            if(com.uid == id){
                com.status = "completed"
            }
            return com
        })
        setAlltask(updatestatus)
        alert("status changed")
    }

    const deleteTask = (id) =>{
        setAlltask(alltask.filter(item => item.uid != id))
        alert("Delete task")
    }

    return (
        <div align="center">
            <h2>Todo List</h2>
            <form onSubmit={handlesubmit}>
                task :{""}
                <input type="text" onChange={(e) => setTask(e.target.value)} value={task}/>
                <input type="submit" />
            </form><br></br>
            <h2>view task</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Task</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alltask.map((t) =>{
                            const{uid,task,status} = t
                            return (
                                <tr key={uid}>
                                    <td>{uid}</td>
                                    <td>{task}</td>
                                    <td>{status}</td>
                                    <td>
                                        <button disabled={status == "completed"} onClick={ () => compkleteTodo(uid)}>Complete</button> || 
                                        <button onClick={ () => deleteTask(uid)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Todo