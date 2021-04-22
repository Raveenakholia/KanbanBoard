import React from 'react'
import './TaskContainer.scss'

export default function TaskContainer(props) {
    return (
        <div className="taskDiv">
            <h2>{props.taskName}</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, sapiente! Quam debitis nam doloremque quia consectetur, aut veritatis quos nulla dignissimos cum dolorem. Fuga, provident. Esse at fugit doloremque numquam.</p>  
        </div>
    )
}
