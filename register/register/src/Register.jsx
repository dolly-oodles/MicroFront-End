
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled, { createGlobalStyle } from "styled-components";
import "./index.scss";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /\S+@\S+\.\S+/;

const GlobalStyles = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  background-image: url("https://images.pexels.com/photos/7512950/pexels-photo-7512950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover; 
  background-repeat: no-repeat; 
  background-position: center; 
  background-attachment: fixed; 
  font-family: 'Noto Sans', sans-serif;
  }
`;

const RegisterSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(152, 195, 215, 0.19);
  border-radius: 16px;
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border: 1px solid rgba(152, 195, 215, 0.17);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 20px 60px;
`;
const RegisterTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #004289;
`;
const RegisterForm = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;
const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f1f1f1;
`;
const FormLabel = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 600;
  color: #004289;
`;
const ErrorMsg = styled.p`
  margin-top: -10px;
  margin-bottom: 15px;
  color: red;
`;
const SubmitButton = styled.button`
  width: 100%;
  margin-top: 8px;
  padding: 10px;
  background-color: #004289;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 17px;
  &:hover {
    background-color: #0056b3;
  }
`;

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "https://conduit.productionready.io/api/users",
          {
            user: {
              username: formData.username,
              email: formData.email,
              password: formData.password,
            },
          }
        );
        localStorage.setItem("formData", JSON.stringify(formData));
        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setErrors({});
        console.log(response.data);
        console.log("user registered");
        alert("User registered successfully!");
        navigate("/");
      } catch (error) {
        console.error("Registration failed:", error);
        if (error.response && error.response.status === 422) {
          alert("Username or Email already exist");
        } else {
          alert(
            "Something went wrong with registration. Please try again later."
          );
        }
      }
    }
  };

  const validateForm = () => {
    let valid = true;
    let errorsObj = {};

    if (!USER_REGEX.test(formData.username)) {
      errorsObj.username =
        "Username must start with a letter and can contain only letters, numbers, hyphens, and underscores (4-24 characters)";
      valid = false;
    }

    if (!EMAIL_REGEX.test(formData.email)) {
      errorsObj.email = "Email is invalid";
      valid = false;
    }

    if (!PWD_REGEX.test(formData.password)) {
      errorsObj.password =
        "Password must be 8-24 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character (!@#$%)";
      valid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      errorsObj.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(errorsObj);
    return valid;
  };

  return (
    <>
      <GlobalStyles />
      <RegisterSection>
        <RegisterContainer>
          <RegisterTitle>Register</RegisterTitle>
          <RegisterForm>
            <form onSubmit={handleSubmit}>
              <div>
                <FormLabel htmlFor="username">User Name</FormLabel>
                <FormInput
                  type="text"
                  name="username"
                  id="username"
                  placeholder="user name"
                  defaultValue={formData.username}
                  onChange={handleChange}
                  required
                />
                {errors.username && <ErrorMsg>{errors.username}</ErrorMsg>}
              </div>
              <div>
                <FormLabel htmlFor="email">Your email</FormLabel>
                <FormInput
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@company.com"
                  defaultValue={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
              </div>
              <div>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  defaultValue={formData.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}
              </div>
              <div>
                <FormLabel htmlFor="confirm-password">
                  Confirm password
                </FormLabel>
                <FormInput
                  type="password"
                  name="confirmPassword"
                  id="confirm-password"
                  placeholder="••••••••"
                  defaultValue={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                {errors.confirmPassword && (
                  <ErrorMsg>{errors.confirmPassword}</ErrorMsg>
                )}
              </div>
              <div>
                <div>
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    required
                  />
                  <FormLabel htmlFor="terms">
                    I accept the <a href="#">Terms and Conditions</a>
                  </FormLabel>
                </div>
              </div>
              <SubmitButton type="submit">Create an account</SubmitButton>
              <p>
                Already have an account? <a href="/">Login here</a>
              </p>
            </form>
          </RegisterForm>
        </RegisterContainer>
      </RegisterSection>
    </>
  );
};

export default Register;
