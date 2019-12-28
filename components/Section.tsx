import React from "react";

const Section: React.FC<{
  heading: string;
}> = props => (
  <div className="flex mt-4">
    <div style={{ minWidth: "12rem" }}>
      <p
        className="text-blue-600 uppercase"
        style={{ letterSpacing: "0.2rem" }}
      >
        {props.heading}
      </p>
    </div>
    <div className="flex-grow border-b border-blue-600 pb-4">
      {props.children}
    </div>
  </div>
);

export default Section;
