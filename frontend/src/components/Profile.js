import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";

function Profile(){
    const {id} = useParams();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`/user/${id}`);
                if (response.ok){
                    const data = await response.json();
                    setUser(data);
                } else {
                    setError(`Failed to fetch user with id ${id}`);
                }
            } catch (error){
                setError('Failed');
            }
        }
        fetchUser();
    }, [id]);

    if(error){
        return <div> Error: {error}</div>
    }

    if(!user){
        return <div>Loading...</div>
    }

    return(
        <div>
            <Container>
                <h2>{user.username}'s Profile</h2>
                <div>Email: {user.email}</div>
            </Container>
        </div>
    )

}

export default Profile;