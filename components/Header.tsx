import React from "react";
import data from "../data/data.json";
import * as Icon from "react-feather";

const Header: React.FC<{}> = props => (
  <div className="bg-blue-600 text-white py-8 mb-8">
    <div className="container mx-auto flex items-center px-4">
      <div className="flex-grow">
        <p
          className="uppercase text-4xl font-light mb-2"
          style={{ letterSpacing: "0.3rem" }}
        >
          {data.name}
        </p>
        <p
          className="uppercase text-lg font-light mb-2"
          style={{ letterSpacing: "0.3rem" }}
        >
          {data.title}
        </p>
      </div>
      <div>
        <p className="flex mb-2 items-center">
          <Icon.Mail className="mx-2" size="20" /> {data.email}
        </p>
        <p className="flex mb-2 items-center">
          <Icon.Globe className="mx-2" size="20" /> {data.website}
        </p>
        <p className="flex mb-2 items-center">
          <Icon.Phone className="mx-2" size="20" /> {data.mobile}
        </p>
      </div>
    </div>
  </div>
);

export default Header;
