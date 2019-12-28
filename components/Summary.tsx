import React from "react";
import data from "../data/data.json";
import Section from "./Section";
import List from "./List";

const Summary: React.FC<{}> = props => (
  <Section heading="Summary">
    <List points={data.summary} />
  </Section>
);

export default Summary;
