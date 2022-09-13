import React, { FC, useState, ChangeEvent, MouseEvent } from "react";

interface contactProps {
  name: string;
  age: number;
}
// interface eventProps {
//   target: { value: string | number };
// }

const ContactPage: FC<contactProps> = ({ name, age }) => {
  const [state, setState] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    e.preventDefault();
  };
  return (
    <div>
      <h1>Contact Page</h1>
      <input type="text" onChange={(e) => handleChange(e)} />
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default ContactPage;
