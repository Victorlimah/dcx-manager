import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 0;
  background-color: #fafafa;
  position: absolute;
  top: 0px;
  z-index: -1;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  transform: translateX(0);

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-left: 250px;
  }

  @media (max-width: 768px) {
    left: 0;
    transform: translateX(0);
  }
`;

export const ContentTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: #000;
  margin-top: 20px;

  @media (max-width: 450px) {
    font-size: 1.8rem;
  }
`;

export const Description = styled.p`
  width: 40%;
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
  margin-top: 20px;
  text-align: center;
  @media (max-width: 450px) {
    font-size: 1.1rem;
  }
`;
