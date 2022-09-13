import React from "react";

interface bioProp {
  firstName: string;
  age: number;
}

interface homePageProps {
  title?: string;
  desc: string;
  streetno?: number;
  bioData: bioProp[];
}

function Homepage({
  desc = "zonezonezone",
  streetno = 787897,
  title,
  bioData,
}: homePageProps) {
  return (
    <div>
      Homepage
      <li>{title}</li>
      <li>{desc}</li>
      <li>streetno:{streetno}</li>
      {bioData.map((item) => {
        return <p>{item.firstName}</p>;
      })}
    </div>
  );
}

Homepage.defaultProps = {
  title: "Redux",
};
export default Homepage;
