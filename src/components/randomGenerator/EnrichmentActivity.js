import React from "react";

const EnrichmentActivity = ({activity, benefits}) => {
    return (
        <article>
            <h3>{activity}</h3>
            <p>benefits: {benefits}</p>
        </article>
    );
};

export default EnrichmentActivity;
