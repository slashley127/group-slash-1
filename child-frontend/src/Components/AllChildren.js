import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const AllChildren = () => {

    const [child, setChild] = useState([]);

    useEffect(() => {
        fetchChildren();
    }, []);

    const fetchChildren = async () => {
        try {
            const response = await fetch('/child');
            if(response.ok) {
                const data = await response.json();
                setChild(data);
            } else {
                console.error('Failed to fetch children');
            }
        } catch (error){
            console.error('Error fetching children:', error);
        }
    };


    return (
        <div>
            <h2>My Children</h2>
            <ul>
                {child.map(child => (
                    <li key={child.id}>
                        <Link to={`/child/${child.id}`}>{child.childName}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default AllChildren;