import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-left: 130px;
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
  margin-bottom: 20px;

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

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 120px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Input = styled.input`
  width: 50%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #000;
  padding: 0 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;

  @media (max-width: 450px) {
    font-size: 1.1rem;
  }
`;

export const Select = styled.select`
  width: 50%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #000;
  padding: 0 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1rem;
  font-weight: bold;

  @media (max-width: 450px) {
    font-size: 1.1rem;
  }

  option {
    font-size: 1rem;
    color: #000;
    @media (max-width: 450px) {
      font-size: 1.1rem;
    }
  }
`;

export const Button = styled.button`
  width: 50%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #000;
  padding: 0 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
  background-color: #fafafa;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
`;

export const ContentBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const ContentTable = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin-top: 10px;
  margin-left: 120px;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const TableHeader = styled.thead`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const ContentTableHeader = styled.thead`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const ContentTableHeaderTitle = styled.th`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: bold;
  font-size: 1.2rem;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const TableBody = styled.tbody`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const ContentTableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 450px) {
    width: 100%;
  }
`;


export const ContentTableRow = styled.thead`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const ContentTableRowTitle = styled.th`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 450px) {
    width: 100%;
  }
`;
