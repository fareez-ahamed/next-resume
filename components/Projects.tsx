import React from "react";
import Section from "./Section";
import List from "./List";
import data from "../data/data.json";

const Project: React.FC<{
  name: string;
  startDate: string;
  endDate: string;
  role: string;
  points: Array<string>;
}> = props => (
  <div className="mt-2 mb-4">
    <div className="flex mb-2">
      <p className="text-blue-600 font-semibold flex-grow">{props.name}</p>
      <p className="text-gray-700">
        {props.startDate} - {props.endDate}
      </p>
    </div>
    <p className="mb-2 italic">{props.role}</p>
    <List points={props.points} />
  </div>
);

const Projects: React.FC<{}> = props => (
  <Section heading="Projects">
    {data.projects.map(p => (
      <Project
        name={p.name}
        startDate={p.start_date}
        endDate={p.end_date}
        role={p.role}
        points={p.points}
      ></Project>
    ))}
  </Section>
);

export default Projects;
