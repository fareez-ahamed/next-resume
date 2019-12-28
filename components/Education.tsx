import React from "react";
import Section from "./Section";
import data from "../data/data.json";

const Education: React.FC<{}> = props => (
  <Section heading="Education">
    {data.education.map(edu => (
      <div className="flex mb-2">
        <p className="flex-grow">
          {edu.degree} - {edu.field_of_study}
          <span className="text-gray-700 font-italics">
            &nbsp;at {edu.institute}, {edu.location}
          </span>
        </p>
        <p className="text-gray-700">
          {edu.start_date} - {edu.end_date}
        </p>
      </div>
    ))}
  </Section>
);

export default Education;
