import React, { Component, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/dist";
import { Button, Container, ListGroup, ListGroupItem } from "reactstrap";


function Profile() {
    const [createdChildId, setCreatedChildId] = useState(null);
    const {id} = useParams('');
    return (
      <div>
        <h1>User Profile</h1>
        <p>This is the user profile page.</p>
        <Link to={`/profile/${createdChildId}`}>View Profile</Link>
      </div>
    );
  }


export default Profile;