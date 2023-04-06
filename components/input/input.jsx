import Output from "../output/output"
import { useState } from "react"

const input = () => {
    const [taskName, setTaskName] = useState ("")
    const [taskDesc, setTaskDesc] = useState("")
    const [todos,setTodos] = useState([])

    const changeNameHandler = (e) => {
        setTaskName(e.target.value)
    }

    const changeDescHandler = (e) => {
        setTaskDesc(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if(taskName==="") {
            alert('please enter a task name')
            return
        }
        const newTodos = [...todos, [taskName, taskDesc]]
        setTodos(newTodos)
        setTaskName("")
        setTaskDesc("")
    }

    const deleteHandler = (indexHandler) => {
        const newTods = [...todos]
        newTods.splice(indexHandler,1)
        setTodos(newTods)
    }

    return (
        <>
            <form className="bg-gray-600 mx-auto m-4 p-4 flex flex-col lg:w-3/4 justify-evenly rounded-xl" onSubmit={submitHandler}>
                <div className="flex flex-col my-4">
                    <label className="flex justify-start text-white font-Alkatra text-3xl">Name </label>
                    <input type="text" placeholder="Task Name" className="p-3 rounded-lg" onChange={changeNameHandler} value={taskName}/>
                </div>

                <div className="flex flex-col my-4">
                    <label className="flex justify-start text-white font-Alkatra text-3xl"> Description </label>
                    <textarea id="" cols="30" rows="5" className="rounded-lg p-2" onChange={changeDescHandler} value={taskDesc}></textarea>
                </div>

            
                <input type="submit" value="Add Item" name="Add" className="bg-amber-600 mx-auto p-4 rounded-lg text-white font-Alkatra text-2xl flex justfiy-start"/>
            </form>

            <Output todoList = {todos} deleteHandler={deleteHandler}/>
        </>
    )
}

export default input