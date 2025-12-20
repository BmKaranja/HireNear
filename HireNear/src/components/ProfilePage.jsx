import React from 'react'
import { useParams, useLocation, Link } from "react-router-dom";

function ProfilePage() {
  const { id } = useParams();
  const location = useLocation();
  const user = location.state?.user; // retrieve passed user
  if (!user) return <p>No user data found for {id}</p>;

  return (
    <div>
        <Link to='/applicants'>Back</Link>
        <img src={user.picture.large} alt={user.name.first} />
        <h2>{user.name.first} {user.name.last}</h2>
        <p>Email: {user.email}</p>
        <p>Gender: {user.gender}</p>
        <p>Location: {user.location.state},{user.location.country}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita atque sunt facilis nulla consequatur ex eligendi suscipit rerum amet, eos reprehenderit commodi cum. A aperiam, odit quos itaque eligendi reiciendis.</p>
    </div>
  );
}

export default ProfilePage
