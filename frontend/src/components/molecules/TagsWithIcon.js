import React from "react";
import { tagIcons } from "../../icons/tagIcons";
import { Tag } from "../atoms/Tag";
import { TagsIterator } from "./TagsIterator";

export function TagsWithIcon({ category, children, items, color }) {
  return (
    <div className="row tagsCont m-0 mb-3">
      <div className="icon mr-2">
        <img src={tagIcons[category]} />
      </div>
      <div className="tags text-left">
        {children || (
          <TagsIterator
            array={Object.values(items)}
            renderFunction={(item) => (
              <Tag item={item} color={color} style="buttonSmall" />
            )}
          />
        )}
      </div>
    </div>
  );
}
