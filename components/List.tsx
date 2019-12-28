import React from "react";

const List: React.FC<{ points: Array<String> }> = props => (
  <ul className="list-disc ml-6">
    {props.points.map(point => (
      <li className="leading-relaxed mb-1">{point}</li>
    ))}
  </ul>
);

export default List;
