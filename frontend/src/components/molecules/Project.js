import React from 'react';
import { Link } from 'react-router-dom';
import { Tag } from '../atoms/Tag';
import { TagsIterator } from './TagsIterator';
import { TagsWithHover } from './TagsWithHover';
import { TagsWithIcon } from './TagsWithIcon';

export function Project( { selectedTags, setselectedTags, sethoveredTag, project}){
      let hoverHandles = {
        handleClick(e){
            e.preventDefault();
            if (selectedTags.includes(e.currentTarget.getAttribute("value"))) {
              return;
            }
            setselectedTags([...selectedTags, e.currentTarget.getAttribute("value")]);
            sethoveredTag('');
        },
        addFilterPlaceholderOnHover(item){
            if (!selectedTags.includes(item)) {
                sethoveredTag(item);
              }
        },
        removeFilterPlaceholderOnHover(){
            sethoveredTag('');
        }
      }

  return (
    <Link to={project["_id"]}>
      <div className="pCont ">
        <h4 className="title mb-4">{project["title"]}</h4>
        <div className="row pTags">
          <div className="col-md-8 p-0">
            <TagsWithIcon items={project["location"]} color="grey" category="location" onHover={(e)=>hoverHandles.addFilterPlaceholderOnHover()}/>           
            <TagsWithIcon color="green" category="skills" >
                <TagsIterator
                    array={Object.values(project["skills"])}
                    renderFunction={item=> <Tag item={item} color="green" tagHoverable="tagHoverable" style="buttonSmall"  onClick={hoverHandles.handleClick} onMouseEnter={() => hoverHandles.addFilterPlaceholderOnHover(item)} onMouseLeave={() => hoverHandles.removeFilterPlaceholderOnHover(item)}/>
                    }
                />
            </TagsWithIcon>

          </div>
          <div className="col-md-4 p-0">
          <TagsWithIcon items={project["type"]} color="grey" category="type" />  
          <TagsWithIcon items={project["rewards"]} color="grey" category="rewards" />  
          </div>
        </div>  
      </div>
    </Link>
  );
}
