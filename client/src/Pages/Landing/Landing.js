import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function Landing() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  function handleLogout() {
    signOut(auth)
      .then(() => {
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch(() => {
        console.error("error signing out");
      });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user.displayName);
        console.log("uid", uid);
      } else {
        console.log("user is logged out");
      }
    });
  });

  return (
    <div>
      <h2>Welcome</h2>
      {user ? (
        <div>
          <p>{user}</p>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
      <Link to={"/login"} onClick={handleLogout}>
        Log Out
      </Link>
    </div>
  );
}

export default Landing;
