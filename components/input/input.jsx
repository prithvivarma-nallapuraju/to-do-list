import Button from "../button/button"



const input = () => {
    return (
        <div className="bg-gray-600 mx-auto m-4 p-4 flex flex-col lg:w-3/4 justify-evenly rounded-xl">
            <div className="flex flex-col my-4">
                <label className="flex justify-start text-white font-Alkatra text-3xl">Name </label>
                <input type="text" placeholder="Task Name" className="p-3 rounded-lg"/>
            </div>

            <div className="flex flex-col my-4">
                <label className="flex justify-start text-white font-Alkatra text-3xl"> Description </label>
                <textarea id="" cols="30" rows="5" className="rounded-lg p-2"></textarea>
            </div>

            
            <Button/>
            
        </div>
    )
}

export default input