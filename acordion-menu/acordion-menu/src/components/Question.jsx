import React, { useState } from "react";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ info, title }) => {
  const [goster, setGoster] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setGoster(!goster)}>
          {goster ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/* {goster ? <p>{info}</p> : ""} */}
      {goster && <p>{info}</p>}
    </article>
  );
};

export default Question;
