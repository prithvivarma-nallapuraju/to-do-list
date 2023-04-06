const button = (props) => {
    return (
        <button className="bg-amber-600 mx-auto p-4 rounded-lg text-white font-Alkatra text-2xl flex justify-stretch h-16" onClick={props.onClick}> {props.value}</button>
    )
}

export default button