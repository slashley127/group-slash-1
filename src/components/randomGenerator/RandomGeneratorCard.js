import React from "react";

const Card = ({ enrichment }) => {
  return (
    <div>
       <article className="random-activity-main">
            <h3>{enrichment.activity}</h3>
            <p>benefits: {enrichment.benefits}</p>
        </article>
     
      </div>

)};

export default Card;