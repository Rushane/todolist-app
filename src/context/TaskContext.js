import React, {useReducer} from 'react';
import createDataContext from './createDataContext';

const taskReducer = (state,action) => {
    switch(action.type) {
        case 'add_task':
            return [...state, {title: `Tasks #${state.length + 1}`}];
        default:
            return state;
    }
};

const addTasks = dispatch => {
    return () => {
        dispatch({type: 'add_task'});
    };
};

export const {Context, Provider} = createDataContext(
    taskReducer,
    {addTasks},
    []
);