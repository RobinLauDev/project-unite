import React from 'react';

export const Text = ({ text, type, color }) => {
    return <p className={`${type} ${color || ""}`}>{text}</p>;
};
