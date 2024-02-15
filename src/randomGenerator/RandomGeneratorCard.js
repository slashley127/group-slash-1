import React from "react";

const Card = ({ enrichment }) => {
  return (
    <div className="random-generator">
       <article>
            <h3>{enrichment.activity}</h3>
            <p>benefits: {enrichment.benefits}</p>
        </article>
     
      </div>

)};

export default Card;