import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export const ModalBody = styled.div`
  margin-top: 30px;
  position: fixed;
  background-color: #fff;
  min-width: 500px;
  min-height: 300px;
  cursor: default;
`;

export const ModalHeader = styled.h1`
  color: red;
`;

export const ReceipeDescription = styled.p`
  color: green;
  display: flex;
`;

export const ButtonClose = styled.button`
  position: fixed;
`;
