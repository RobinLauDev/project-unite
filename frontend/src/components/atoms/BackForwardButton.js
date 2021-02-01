import React from "react";

export const BackForwardButton = ({ onClick, direction }) => {
    return (
        <>
            <button onClick={() => onClick()}>
                {direction == "back" ? "←" : "→"}
            </button>
        </>
    );
};
