import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import styled , {createGlobalStyle} from 'styled-components';

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

const LoginSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginFormContainer = styled.div`
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

const LoginTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #004289;
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

const ErrorMsg = styled.p`
  margin-top: -10px;
  margin-bottom: 15px;
  color: red;
`;


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.email || !formData.password) {
        setError("Please provide both email and password.");
        return;
      }
    
      const response = await axios.post(
        'https://conduit.productionready.io/api/users/login',
        {
          user: {
            email: formData.email,
            password: formData.password
          }
        }
      );
      if (!response.data || !response.data.user) {
         setError("Invalid email or password.");
         return;
      }
      localStorage.setItem("isLoggedIn", true);
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      setError("");

      console.log(response.data);
      alert("User logged in successfully!");
      navigate("/dashboard");
    } catch (error) {
      setError("Login failed.");
      console.error("Login failed:", error);
    }
  };
  

  return (
    <>
      <GlobalStyles />
      <LoginSection>
        <LoginFormContainer>
          <LoginTitle>Login</LoginTitle>
          <form onSubmit={handleSubmit}>
            <div>
              <FormLabel htmlFor="email">Your email</FormLabel>
              <FormInput
                type="email"
                name="email"
                id="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <SubmitButton type="submit">Sign in</SubmitButton>
            <p>Don’t have an account yet? <a href="/register">Sign up</a></p>
          </form>
          {error && <ErrorMsg>{error}</ErrorMsg>}
        </LoginFormContainer>
      </LoginSection>
    </>
  );
}

export default Login;
