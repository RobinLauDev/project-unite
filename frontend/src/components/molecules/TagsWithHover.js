import React from 'react';
import { tagIcons } from '../../icons/tagIcons';

export function TagsWithHover(props) {
  let tags = Object.values(props.tags);

  const handleClick = (e) => {
    e.preventDefault();
    if (props.selectedTags.includes(e.currentTarget.getAttribute("value"))) {
      return;
    }
    props.setselectedTags([...props.selectedTags, e.currentTarget.getAttribute("value")]);
    props.sethoveredTag('');
  };

  const updateSkillOnHover = (item) => {
    if (!props.selectedTags.includes(item)) {
      props.sethoveredTag(item);
    }
  };

  const updateSkillOnHoverMouseOut = (item) => {
    props.sethoveredTag('');
  };


  return (
    <div className="row tagsCont m-0 mb-3">
      <div className="icon mr-2">
          <img src={tagIcons[props.category]} />
      </div>
      <div className="tags text-left">
        {tags.map(item => {
          //Add attr on hover alleen wanneer Tags props.hover true is
          return props.hover ?
            <span value={item} className={`tag btn-secondary btn mr-1 text-left ${props.color}`}
              onMouseEnter={() => updateSkillOnHover(item)}
              onMouseLeave={() => updateSkillOnHoverMouseOut(item)}
              onClick={handleClick} key={item}>{item}</span>
            :
            <span value={item} className={`tag btn-secondary btn mr-1 text-left ${props.color}`}
              key={item}>{item}</span>;
        }
        )}
      </div>
    </div>
  );
}