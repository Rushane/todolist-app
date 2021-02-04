import React from 'react';

const TaskContext = React.createContext();

export const TaskProvider = ({children}) => {
    const taskPosts = [
        {title: 'Task 1'},
        {title:'Task 2'}
    ];

    return (
        <TaskContext.Provider value={taskPosts}>{children}</TaskContext.Provider>
    );
};

export default TaskContext;