import React, {useEffect, useState} from 'react';
import { Alert, Container } from 'reactstrap';

const Profile = () => {
  const[user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () =>{
      try {
        const response = await fetch('/user/profile');
        if(!response.ok){
          throw new Error('Failed to fetch profile');
        }
        const data = await response.json();
        setUser(data);
      } catch (error){
        setError('Failed to fetch profile. Please try again');
      }
    };
    fetchProfile();
  }, []);

  return(
    <div>
      <Container>
        <h2>Profile</h2>
        {error && <Alert color='danger'>{error}</Alert>}
        {user && (
          <div>
            <p><strong>Username:</strong>{user.username}</p>
            <p><strong>Email:</strong>{user.email}</p>
          </div>
        )}
      </Container>
    </div>
  )
}

export default Profile;