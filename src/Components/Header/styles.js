import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: green;
  padding: 15px;
  letter-spacing: 1px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 10px 50px;
  }

  @media (max-width: 450) {
    padding: 10px 20px;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: #fff;

  @media (max-width: 450px) {
    font-size: 1.8rem;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  @media (max-width: 450px) {
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;



