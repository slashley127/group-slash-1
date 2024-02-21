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
        <div className= "random">
            <h1 className= "random-generator-header-text">Random Activity Generator</h1>
            <div>
                {enrichment && <Card enrichment = {enrichment}/>}
            </div>
            <Button className="generate-button" onClick ={getActivity}>Generate</Button>
        </div>
    )

}



export default Enrichment;