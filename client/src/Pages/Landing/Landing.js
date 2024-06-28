import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function Landing({ userId }) {
  const [user, setUser] = useState(null);
  // Fetched the logged in users data
  useEffect(() => {
    async function fetchLoggedInUser(id) {
      try {
        const response = await fetch(`/user/get/${id}`);
        console.log(response);
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          console.error("Could not get user data");
        }
      } catch (error) {
        console.error("Error fetching logging in user", error);
      }
    }
    fetchLoggedInUser(userId);
  }, [userId]);
  return (
    <div>
      <h2>Welcome</h2>
      {user ? (
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
      <Link to={"/login"}>Log Out</Link>
    </div>
  );
}

export default Landing;
