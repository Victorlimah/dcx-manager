import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  justify-content: right;
  height: 100vh;
  max-width: 100vw;
`;

export const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 70%;
`;

export const ChatHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  width: 100%;
  background-color: #240047;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  margin: 70px 0 0 50px;
`;

export const ChatMessages = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 100%;
  background-color: grey;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const Message = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  margin: 5px 0;
  background-color: #240047;
  color: #fff;
  margin-left: 150px;
`;

export const ChatMessageUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-width: 12%;
  max-width: 25%;
  margin: 10px 0;
  padding: 0 10px;
  background-color: ${(props) => (props.sender === props.user ? "green" : "#1c3166")};
  color: #fff;

`;

export const ChatMessageText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height:80%;
  width: 70%;
  margin: 5px 0;
  background-color: #240047;
  color: #fff;
  margin-left: 15px;
`;

export const ChatInput = styled.form`
  display: flex;
  flex-direction: row;
  height: 10%;
  width: 100%;
`;

export const ChatInputText = styled.input`
  display: flex;
  height: 100%;
  width: 80%;
  border: none;
  outline: none;
  margin-left: 115px;
  padding: 10px;
  font-size: 1rem;
`;

export const ChatInputButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 10%;
  border: none;
  outline: none;
`;


  export const ParticipantsBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 20%;
    background-color: #240047;
  `;

export const ParticipantsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  margin-top: 90px;
  z-index: 100;
  `;

  export const ParticipantsList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 75%;
  width: 100%;
  margin-top: 15px;
  `;

  export const ParticipantsItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 5px;
  `;

  export const ParticipantsItemName = styled.p`
  font-size: 1.2rem;
  color: white;
  z-index: 100;
  padding: 5px 0;
  text-align: center;
  `;
  
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

  export const ContentHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 120px;
    margin-bottom: 20px;
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