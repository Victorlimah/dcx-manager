/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import * as S from "./styles";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";

export default function Chatroom() {

  const [ users, setUsers ] = useState([]);
  const [ messages, setMessages ] = useState([]);
  const [ name, setName ] = useState("");
  const [ message, setMessage ] = useState("");
  const [ room, setRoom ] = useState(false);

  useEffect(() => {
    try{
      axios
      .get("http://localhost:8080/message")
      .then(res => setMessages(res.data))
    } catch{
      Swal.fire("Erro", "Não foi possível carregar os dados", "error", "Ok");
    }
  }, [])

  useEffect(() => {
    try {
      axios
        .get("http://localhost:8080/participant")
        .then((res) => setUsers(res.data));
    } catch {
      Swal.fire("Erro", "Não foi possível carregar os dados", "error", "Ok");
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      try {
        refreshMessages();
        refreshUsers();
      } catch {
        Swal.fire("Erro", "Não foi possível carregar os dados", "error", "Ok");
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);
    
  return (
    <>
      <Header />
      <Navbar page="chat" />
      { !room ? <EnterRoom/> : <ChatContainer/> }
    </>
  );

  function ChatContainer(){
    return (
      <S.ChatContainer>
        <S.ChatBody>
          <S.ChatHeader>Sala de conversa</S.ChatHeader>
          <S.ChatMessages>
            {messages.map(({ sender, message }, index) => (
              <S.Message key={index}>
                <S.ChatMessageUser user={name} sender={sender}>{sender}</S.ChatMessageUser>
                <S.ChatMessageText>{message}</S.ChatMessageText>
              </S.Message>
            ))}
          </S.ChatMessages>
          <S.ChatInput onSubmit={sendMessage}>
            <S.ChatInputText
              autoFocus
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Digite sua mensagem"
            />
            <S.ChatInputButton type="submit">Enviar</S.ChatInputButton>
          </S.ChatInput>
        </S.ChatBody>
        <S.ParticipantsBody>
          <S.ParticipantsTitle>Usuários online</S.ParticipantsTitle>
          <S.ParticipantsList>
            {users.map((user, index) => (
              <S.ParticipantsItem key={index}>
                <S.ParticipantsItemName>{user.name}</S.ParticipantsItemName>
              </S.ParticipantsItem>
            ))}
          </S.ParticipantsList>
        </S.ParticipantsBody>
      </S.ChatContainer>
    );
  }

  function EnterRoom(){
    return (
      <S.Content>
        <div>
          <S.ContentHeader>
            <S.ContentTitle>Entrar no bate-papo</S.ContentTitle>
            <S.Input
              type="text"
              autoFocus
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyUp={(e) => e.key === "Enter" && enter()}
              placeholder="Digite seu nome"
            />
            <S.Button
            onClick={() => enter()}
            
            >Entrar</S.Button>
          </S.ContentHeader>
        </div>
      </S.Content>
    );
  }

  function enter(){
    console.log("users", users);
    if(users.find(user => user.name === name))
      Swal.fire("Erro", "Já existe alguém com esse nome na sala", "error", "Ok");

    try{
      axios
      .post("http://localhost:8080/participant", { name })
      .then(res => {
        Swal.fire("Sucesso", "Você entrou na sala", "success", "Ok");
        setRoom(true);
      })
    } catch{
      Swal.fire("Erro", "Não foi possível entrar na sala", "error", "Ok");
    }
  }

  function sendMessage(e){
    e.preventDefault();

    if(!users.find(user => user.name === name)){
      Swal.fire("Erro", "Você foi desconectado por estar ausente", "error", "Ok");  
      setName("");
    return setRoom(false);
  }

    if(message)
        axios
        .post("http://localhost:8080/message", { sender: name, message })
        .then(res => refreshStatus())
        .catch(err => Swal.fire("Erro", "Não foi possível enviar a mensagem", "error", "Ok")
      );
  }

  function refreshMessages(){
    axios
      .get("http://localhost:8080/message")
      .then((res) => setMessages(res.data));
  }

  function refreshUsers(){
    axios
      .get("http://localhost:8080/participant")
      .then((res) => setUsers(res.data));
  }


  function refreshStatus(){
    refreshMessages();
    axios.put(`http://localhost:8080/participant/activity/${name}`, { name });
    setMessage("");
  }
}
