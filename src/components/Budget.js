import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, SET_BUDGET, Currency } = useContext(AppContext);

    const changeBudget = (val)=>{
            dispatch({
                type: 'SET_BUDGET',
                payload: val,
            })
    }
    
    const {  dispatch } = useContext(AppContext);

    const updateBudget = (val)=>{
        if(budget > 5000) {
            alert("The value cannot exceed funds of  £ 5000");
            SET_BUDGET("");
            return;
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>
                Budget: {Currency}
                <input
                    id='Budget'
                    type='number'
                    value={budget}
                    onChange={event=>changeBudget(event.target.value)}
                />
                <button className="btn btn-primary" onClick={updateBudget} style={{ marginLeft: '2rem' }}>
                
                </button>
            </span>
        </div>
    );
};

export default Budget;
