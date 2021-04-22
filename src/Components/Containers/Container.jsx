import React from 'react';
import './Container.scss';
import TaskContainer from './TaskContainer'

export default function Container() {
    return (
        <div className="container">
          <TaskContainer taskName="All Task"/> 
          <TaskContainer taskName="In Progress"/> 
          <TaskContainer taskName="Completed"/> 
        </div>
    )
}
