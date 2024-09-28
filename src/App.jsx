import { useState } from "react";
import Todo from "./Todo";

function App() {
    const [todo, setTodo] = useState([]);
    const addTodo = () => {
        const inputText = document.getElementById("todoInput");
        setTodo([...todo, inputText.value]);
        inputText.value = ""
    };

    return (
        <>
            <h1 className="text-2xl font-bold text-center">Todo App</h1>
            <div className="text-center">
                <input
                    id="todoInput"
                    className="border-black border-2"
                    type="text"
                    placeholder="Add todo"
                />
                <button
                    onClick={() => addTodo()}
                    className="bg-slate-600 text-white px-6 rounded-md"
                >
                    Add
                </button>
            </div>
            <div>
                {
                    todo.map((x, idx )=> <Todo key={idx} todo={x}></Todo>)
                }
            </div>
        </>
    );
}

export default App;
