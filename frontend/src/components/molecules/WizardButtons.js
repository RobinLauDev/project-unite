import React from "react";
import { BackForwardButton } from "../atoms/BackForwardButton";

export const WizardButtons = ({
    selectedStep,
    totalSteps,
    handleBack,
    handleNext,
    submitButton,
}) => {
    return (
        <div className="buttonCont">
            <div className="leftButton-wrapper">
                {selectedStep > 0 ? (
                    <BackForwardButton direction="back" onClick={() => handleBack()} />
                ) : null}
            </div>

            {selectedStep == totalSteps ? submitButton() : null}
            <div className="rightButton-wrapper">
                {selectedStep < totalSteps ? (
                    <BackForwardButton direction="next" onClick={() => handleNext()} />
                ) : null}
            </div>
        </div>
    );
};
