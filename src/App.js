import React from 'react';
import './App.css';

function TodoList({ tarefa, index, completeTodo, removeTodo }) {
    return(
        <div 
            className="todo"
            style={{ textDecoration: tarefa.isCompleted ? "line-through" : "" }}
        >
            {tarefa.texto}
            <div>
                <button onClick={() => completeTodo(index)}>
                    { tarefa.isCompleted ? "Reativar": "Finalizar" }
                </button>
                <button onClick={() => removeTodo(index)}>Excluir</button>
            </div>
        </div>
    );
}

function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}

function App() {
    const [todos, setTodos] = React.useState([
        { 
            texto: "Aprender sobre o React.", 
            isCompleted: false 
        },
        { 
            texto: "Xingar o React.", 
            isCompleted: false 
        },
        { 
            texto: "Sei lá, teste.", 
            isCompleted: false 
        },
    ]);

    const addTodo = texto => {
        const newTodos = [...todos, { texto }];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return(
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <TodoList 
                        key={index}
                        index={index}
                        tarefa={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                    />
                ))}
                <TodoForm addTodo={addTodo} />
            </div>
        </div>
    );
}

export default App;