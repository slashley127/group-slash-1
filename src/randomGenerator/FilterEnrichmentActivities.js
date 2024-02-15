import React, { Component } from "react";
import Checkbox from "./CheckBox";
import EnrichmentActivityList from './EnrichmentActivityList';
import data from "./enrichmentActivities.json";
import Enrichment from './RandomGenerator.js';
import './randomGenerator.css';

export default class FilteredEnrichmentActivities extends Component {
  state = {
    activities: data.enrichmentActivities,
    categories: {
      indoor: false,
      toddler: false,
      bigKid: false,
      teenager: false,
    },
  };

  handleChange = (e) => {
    const { name } = e.target;

    this.setState((prevState) => {
      return {
        categories: {
          ...prevState.categories,
          [name]: !prevState.categories[name],
        },
      };
    });
  };

  render() {
    const checkedCategories = Object.entries(this.state.categories)
      .filter((category) => category[1])
      .map((category) => category[0]);

      const filteredActivities = this.state.activities.filter(activity => {
        return checkedCategories.every(category => activity.categories[category]);
      });

    return (
      <div className="randomGenerator">
        <Enrichment />
        <p>Or, filter </p>
        <div className = "checkbox-wrapper">
        <Checkbox
          id="indoor"
          title="Show me indoor activities!"
          name="indoor"
          checked={this.state.categories.indoor}
          handleChange={this.handleChange}
        />
        <Checkbox
          id="toddler"
          title="Show me activities for toddlers!"
          name="toddler"
          checked={this.state.categories.toddler}
          handleChange={this.handleChange}
        />
        <Checkbox
          id="bigKid"
          title="Show me activities for big kids!"
          name="bigKid"
          checked={this.state.categories.bigKid}
          handleChange={this.handleChange}
        />
        <Checkbox
          id="teenager"
        title="Show me activities for teenagers!"
          name="teenager"
          checked={this.state.categories.teenager}
          handleChange={this.handleChange}
        />
        </div>
        <EnrichmentActivityList
          enrichmentActivities={
            filteredActivities.length === 0
              ? this.state.activities
              : filteredActivities
          }
        />
      </div>
    );
  }
}
  