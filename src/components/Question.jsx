import React, { useState } from "react";
import { arrowup, arrowdown } from "../helper/icons";

const Question = ({ id, question, answer }) => {
  const [show, setShow] = useState(true);

  const handleToggle = () => setShow(!show);
  // const handleToggle = () => { buda bi secenek
  //   if(show){
  //     setShow(false)
  //   }else{
  //     setShow(true)
  //   }
  // }

  return (
    <div className="card-group">
      {show ? (
        <div className="card">
          <div className="ques-answer">
            <h5>
              {id}.{question}
            </h5>
            <button
              // onClick={()=> setShow(true)} buda bi secenek
              onClick={handleToggle}
            >
              {arrowup}
            </button>
          </div>
          <p> {answer} </p>
        </div>
      ) : (
        <div className="card">
          <div className="ques-answer">
            <h5>
              {id}.{question}
            </h5>
            <button
              // onClick={()=> setShow(false)} buda bi secenek
              onClick={handleToggle}
            >
              {arrowdown}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Question;
