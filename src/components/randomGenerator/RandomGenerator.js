import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {useState} from 'react';
import Card from "./RandomGeneratorCard";
import data from "./enrichmentActivities.json";



function Enrichment() {
    const [enrichment, setEnrichment] = useState({
        id: 1,
        activity: "Go to the local library and checkout some books",
        benefits: "early literacy, community engagement",
        indoor: true,
        toddler: true,
        bigKid: true,
        teenager: true
    });

    async function getActivity() {
        let activity = data.enrichmentActivities[Math.floor(Math.random()*data.enrichmentActivities.length-1)]
        setEnrichment(activity);
      }


    return (
        <div>
            <h1>Random Activity Generator</h1>
            <p> Cannot think of what activity to do with your children that does not involve screens? Click below for a random idea!</p>
            <div>
                {enrichment && <Card enrichment = {enrichment}/>}
            </div>
            <Button onClick ={getActivity}>Generate Random Activity</Button>
        </div>
    )

}



export default Enrichment;