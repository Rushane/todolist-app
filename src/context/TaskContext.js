import React, {useReducer} from 'react';
import createDataContext from './createDataContext';

const taskReducer = (state,action) => {
    switch(action.type) {
        case 'delete_task':
            return state.filter(taskPosts => taskPosts.id !== action.payload )
        case 'add_task':
            return [
                ...state, 
                {
                    id: Math.floor(Math.random() * 99999),
                    title: `Tasks #${state.length + 1}`
                }
            ];
        default:
            return state;
    }
};

const addTasks = dispatch => {
    return () => {
        dispatch({type: 'add_task'});
    };
};

const deleteTask = dispatch => {
    return (id) => {
        dispatch({type:'delete_task', payload: id});
    };
}

export const {Context, Provider} = createDataContext(
    taskReducer,
    {addTasks, deleteTask},
    []
);