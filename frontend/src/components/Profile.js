import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "reactstrap";

function Profile({id}){
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`/user/${id}`);
                if (response.ok){
                    const userData = await response.json();
                    setUser(userData);
                } else {
                    console.error(`Failed to fetch user with id ${id}`);
                }
            } catch (error){
                console.error('Failed');
            }
        }
        fetchUser();
    }, [id]);

    // if(error){
    //     return <div> Error: {error}</div>
    // }

    // if(!user){
    //     return <div>Loading...</div>
    // }

    return(
        <div >
            <Link to="/">Logout</Link>
            {user ? (
                <div>
                    <h2>My Profile</h2>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>My Children:</p>
                    <ul>
                        <li>Add Later</li>
                    </ul>
                </div>
            ) : (
                <p>Loading user profile...</p>
            )}
        </div>
    )

}

export default Profile;