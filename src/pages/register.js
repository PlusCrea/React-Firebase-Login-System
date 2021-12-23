import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  let navigate = useNavigate();

  function onRegister(e) {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        //update user
        console.log("auth.currentUser", auth.currentUser);
        updateProfile(user, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            navigate("/user");
          })
          .catch((error) => {
            // An error occurred
            console.log("Update Error", error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log("Create Error", errorMessage);
      });
  }

  return (
    <div className="main">
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form className="register-form" onSubmit={onRegister}>
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name" />
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email" />
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pass">
                    <i className="zmdi zmdi-lock" />
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="re-pass">
                    <i className="zmdi zmdi-lock-outline" />
                  </label>
                  <input
                    type="password"
                    name="repassword"
                    placeholder="Repeat your password"
                    value={repassword}
                    onChange={(e) => setRepassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="checkbox"
                    name="agree-term"
                    id="agree-term"
                    className="agree-term"
                  />
                  <label htmlFor="agree-term" className="label-agree-term">
                    <span>
                      <span />
                    </span>
                    I agree all statements in{" "}
                    <a href="#" className="term-service">
                      Terms of service
                    </a>
                  </label>
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    defaultValue="Register"
                  />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src="images/signup-image.jpg" alt="sing up image" />
              </figure>
              <Link to="/login" className="signup-image-link">
                I am already member
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
