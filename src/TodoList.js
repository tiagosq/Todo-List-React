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

export default TodoList;