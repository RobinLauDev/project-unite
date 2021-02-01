import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export function SubmitButton({ loading, onClick }) {
    return (
        <button onClick={onClick} className="submitButton">
            {loading
                ?
                (<Spinner animation="border" role="status">
                    <span className="sr-only"></span>
                </Spinner>)
                :
                "Submit"}
        </button>
    );
}
