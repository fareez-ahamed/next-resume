import React from "react";
import Section from "./Section";
import data from "../data/data.json";

const Experience: React.FC<{}> = props => (
  <Section heading="Experience">
    {data.experience.map(exp => (
      <div className="flex mb-2">
        <p className="flex-grow">
          <span className="font-medium">{exp.title}&nbsp;</span>
          <span className="text-gray-700 italic">
            at {exp.company}, {exp.location}
          </span>
        </p>
        <p className="text-gray-700">
          {exp.start_date} - {exp.end_date}
        </p>
      </div>
    ))}
  </Section>
);

export default Experience;
