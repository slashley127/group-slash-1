import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const AllChildren = () => {

    const [child, setChild] = useState([]);

    useEffect(() => {
        fetchChild();
    }, []);

    const fetchChild = async () => {
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


    const handleDeleteChild = async (id) => {
        try {
            const response = await fetch(`/child/${id}`, {
                method: 'DELETE',
            });
            if(response.ok) {
                fetchChild();
            } else {
                console.error('Failed to delete child');
            }
        }catch (error){
            console.error('Error deleting child:', error);
        }
    };


    return (
        <div>
            <h2>My Children</h2>
            <ul>
                {child.map(child => (
                    <li key={child.id}>
                        <Link to={`/child/${child.id}`}>{child.childName}</Link>
                        <Button onClick={() => handleDeleteChild(child.id)}>Delete</Button>
                    </li>
                ))}
            </ul>
            <Link to="/addChild">
                <Button>Add Child</Button>
            </Link>
        </div>
    )

}

export default AllChildren;