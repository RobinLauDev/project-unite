import React from 'react';
import { inputClickHandler } from '../../utils/states/inputClickHandler';

export const FilterTagsLocation = ({ optionsArray, selectedTagsArray, setStateFn, inputName, inputType }) => {
    ;

    const tagElementsArray = optionsArray.map(item => {
        if (selectedTagsArray.includes(item)) {
            return <span className={"hoverSkill"} key={item} value={item} name={inputName} onClick={(e)=>inputClickHandler(e, setStateFn, inputName, inputType)}>{item} x</span>;
        }
        return <span className={"smallDottedTag"} key={item} value={item} name={inputName} onClick={(e)=>inputClickHandler(e, setStateFn, inputName, inputType)}>{item} +</span>;
    });

    return (
        <div className="filterTagsCont2">
            <div className="filterTags">
                {tagElementsArray}
            </div><br />
        </div>
    );
};
