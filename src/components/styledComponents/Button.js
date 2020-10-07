import styled, { keyframes } from "styled-components";

const ripple = keyframes`
    from {
      opacity: 1;
      transform: scale(0);
    }
    to {
      opacity: 0;
      transform: scale(1);
    }
`;

const Button = styled.button`
  color: #41aed2;
  border: 2px solid #41aed2;
  padding: 2px 10px;
  font-size: 20px;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  transition: 500ms;
  position: relative;
  overflow: hidden;
  &::after {
    display: none;
    content: "";
    position: absolute;
    border-radius: 50%;
    background-color: rgba(100, 209, 244, 0.5);
    opacity: 0.1;
    width: 100px;
    height: 100px;
    margin-top: -50px;
    margin-left: -50px;

    /* Center the ripple */
    top: 50%;
    left: 50%;

    animation: ${ripple} 1s;
    opacity: 0;
  }
  &:focus:not(:active)::after {
    display: block;
  }

  &:hover {
    background-color: #e3f7fe;
  }
`;

export default Button;
