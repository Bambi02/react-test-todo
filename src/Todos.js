import React from 'react'

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length 
        ? (todos.map(todo => {
            return(
                <div className="to-do-content" key={ todo.id } onClick={ () => { deleteTodo(todo.id) } }>
                    <span >{ todo.content }</span>
                </div>
            )
        }))
        : (
            <div className="no-to-do-content">
                <p>Nemáš žiadne zvyšné úlohy</p>
            </div>
        ) 

    return(
        <div className="todos">
            { todoList }
        </div>
    )
}

export default Todos