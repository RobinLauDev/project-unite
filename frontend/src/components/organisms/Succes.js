import React from 'react';
import { useGlobalProjectContext } from '../../contextReducers/addProjectContext';
import { InputElementWithDescription } from '../molecules/InputElementWithDescription';


//
export function Succes() {
    return (
        <div className="succes-container">
            <h2>Your project has been uploaded</h2>
        </div>
    );
}

