import React, { useState } from "react";
import "./App.css";

function PersonCard(props) {
  const [age, setAge] = useState(props.age);

  const handleBirthday = () => {
    setAge(age + 1);
  };

  return (
    <div className="PersonCard">
      <h1>
        {props.lastName}, {props.firstName}
      </h1>
      <p>Age: {age}</p>
      <p>Hair color: {props.hairColor}</p>
      <button onClick={handleBirthday}>
        Birthday button for {props.firstName} {props.lastName}
      </button>
    </div>
  );
}

export default PersonCard;
