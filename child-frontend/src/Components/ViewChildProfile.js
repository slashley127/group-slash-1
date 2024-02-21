import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom/dist";
import { Button, Container, ListGroup, ListGroupItem } from "reactstrap";


function ViewChildProfile() {
    const [child, setChild] = useState(null);
    const [error, setError] = useState(null);
    const {id} = useParams();


    useEffect(() => {
        const fetchChild = async () => {
            try {
                const response = await fetch(`/child/${id}`);
                if(response.ok){
                    const data = await response.json();
                    setChild(data);
                } else {
                    setError(`Failed to fetch child profiles with id ${id}`);
                }
            
            }catch (error){
                setError('Failed')
            }
        }
        fetchChild();
    }, [id]);

    if(error){
        return <div>Error: {error}</div>
    }

    if(!child){
        return <div>Loading...</div>
    }

    return (
        <div>
            <Container>
                <h2>Child Profile</h2>
                <div>Name: {child.childName}</div>
            </Container>
        </div>
    );
}

export default ViewChildProfile;