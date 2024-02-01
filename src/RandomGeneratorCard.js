import React from "react";

const Card = ({ enrichment }) => {
  return (
    <div className="card px-5 py-8 max-w-[650px]">
      <p className="text-2xl font-mono font-bold">The activity: "{enrichment.activity}" has the following benefits: "{enrichment.benefits}"</p>
     
      </div>

)};

export default Card;