import React from "react";
import EnrichmentActivity from "./EnrichmentActivity"

const EnrichmentActivityList = props => {
  const { enrichmentActivities } = props;

  const renderEnrichmentActivities = enrichmentActivities.map(({ id, activity, benefits, indoor, toddler, bigKid, teenager }) => {
    return (
      <li key={id}>
        <EnrichmentActivity activity={activity} benefits={benefits} indoor={indoor} toddler= {toddler} bigKid = {bigKid} teenager ={teenager} />
      </li>
    );
  });

  return <ul>{renderEnrichmentActivities}</ul>;
};

export default EnrichmentActivityList;