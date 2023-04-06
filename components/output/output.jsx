import Button from "../button/button"

const output = (props) => {
    return (
       
        <div className="flex flex-col justify-center mx-auto lg:w-3/4 m-1 p-4">
            {props.todoList.map((todo,index)=>{
                return (
                    <div key={index} className="flex flex-col sm:flex-row justify-end bg-slate-300 m-4 p-4 rounded-lg">
                        <div className="flex flex-col w-3/4 text-start">
                            <h5 className="text-3xl font-Alkatra font-extrabold text-red-600 overflow-auto whitespace-pre-line">{todo[0]}</h5>
                            <p className="text-xl font-Alkatra font-medium overflow-visible whitespace-pre-line">{todo[1]}</p>
                        </div>
                        <Button value="Delete" onClick = {(index)=> props.deleteHandler(index)}/>
                    </div> 
                )
            })}
        </div>
    )
}

export default output