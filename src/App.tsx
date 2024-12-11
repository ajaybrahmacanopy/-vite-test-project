import React, { useState } from "react";
import styled from "styled-components";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// Styled components for CSS
const AppContainer = styled.div`
  text-align: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;

  .logo {
    height: 4rem;
    cursor: pointer;
  }

  .react {
    animation: spin infinite 20s linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Card = styled.div`
  margin: 2rem auto;
  padding: 1rem;
  border: 2px solid #eee;
  border-radius: 10px;
  width: 300px;
  background-color: #f9f9f9;

  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #61dafb;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    color: white;

    &:hover {
      background-color: #21a1f1;
    }
  }
`;

const Footer = styled.p`
  font-size: 0.9rem;
  color: #888;
`;

const StyledHeader = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

// Utility function to handle string transformations
const transformString = (str) => str.toUpperCase();

// Header Component
const Header = ({ text }) => {
  return <StyledHeader>{transformString(text)}</StyledHeader>;
};

// Counter Component
const Counter = ({ initialCount }) => {
  const [counter, setVal] = useState(initialCount);

  const inCount = () => setVal((prev) => prev + 1);
  const decrementCounter = () => setVal((prev) => prev - 1);

  return (
    <Card>
      <h2>Counter: {counter}</h2>
      <button onClick={inCount}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </Card>
  );
};

// Main App Component
function App() {
  return (
    <AppContainer>
      <LogoContainer>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </LogoContainer>
      <Header text="Vite + React" />
      <Counter initialCount={0} />
      <Footer>Click on the Vite and React logos to learn more</Footer>
    </AppContainer>
  );
}

export default App;
