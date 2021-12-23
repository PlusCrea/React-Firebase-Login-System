import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function User() {
  let navigate = useNavigate();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log("user.uid", user.uid);
        // ...
      } else {
        navigate("/login");
      }
    });
  }, []);

  return (
    <div className="main">
      <section className="sign-in">
        <div className="container">
          <div
            style={{
              height: "95vh",
              display: "flex",
              justifycontent: "center",
            }}
          >
            <img
              src="images/welcome.jpg"
              style={{ margin: "auto", display: "block" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
