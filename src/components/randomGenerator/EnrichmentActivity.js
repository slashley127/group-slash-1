import React from "react";

const EnrichmentActivity = ({activity, benefits}) => {
    return (
        <article className = "filtered-activities">
            <h3>{activity}</h3>
            <p>benefits: {benefits}</p>
        </article>
    );
};

export default EnrichmentActivity;
