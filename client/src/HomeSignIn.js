import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";

function HomeSignIn({ setIsAuthenticated, setUser, error }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState([]);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    const newUser = {
      username: newUsername,
      password: newPassword,
    };

    fetch(`/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setIsAuthenticated(true);
        });
      } else {
        res.json().then((json) => setError(json.errors));
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      username: username,
      password,
    };

    fetch(`/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setIsAuthenticated(true);
        });
      } else {
        res.json().then((json) => setError(json.error));
      }
    });
  };

  return (
    <div className="home-page" >
      <div className="Banner">
        <h4 className="Tittle"> Bulls Fans! Please Login</h4>
      </div>

      <div className="sign-in" >Sign In</div>
      <p></p>
      <form onSubmit={handleSubmit}>
        <div className="username">
          <label>
            username:{" "}
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div className="password">
          <label>
            password:{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className="submit"> <input className="SaveButton" type="submit" value="Log In" />
        </div>
      </form>
      {errors ? <div>{errors}</div> : null}

<p></p>

      <div className="sign-up">
        Don't have an account ? Sign up now!
        <p></p>
        <>
          <form className="form" onSubmit={handleSignUp}>
            <div className="username-signup">
              <label>
                username:{" "}
                <input
                  type="text"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                />
              </label>
            </div>
            <div className="password-signup">
              <label>
                password:{" "}
                <input
                  type="Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </label>
            </div>
            <div>
              <input type="submit" value="Sign Up" className="SaveButton" />
            </div>
          </form>
          {errors ? <div>{errors}</div> : null}
        </>
      </div>
    </div>
  );
}
export default HomeSignIn;
