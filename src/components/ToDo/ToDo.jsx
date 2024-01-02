const ToDo = ({ todo, handleSetComplete, handleDelete }) => {

    const { id, title, completed} = todo;

    return (

        <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600 font-inter">
            <div className="flex items-center">
                {
                    completed ? (
                        <div 
                            className="bg-green-700 p-1 rounded-full cursor-pointer"
                            onClick={() => handleSetComplete(id)}>
                            <img className="w-4 h-4" src="/check-icon.svg" alt="Check Icon" />
                        </div>
                    ) : (
                        <span 
                            className="border-solid border border-gray-600 rounded-full p-3 cursor-pointer"
                            onClick={() => handleSetComplete(id)}></span>
                    )
                }
                <p className={'pl-3 ' + (completed && "line-through")}>
                    {title}
                </p>
            </div>
            <img 
                className="h5- w-5 cursor-pointer transition-all duration-300 ease-in" 
                src="/close-icon.svg" 
                alt="Close Icon" 
                onClick={() => handleDelete(id)}/>
        </div>
    )
}

export { ToDo } 