import React, { useState } from 'react';
import { Socket } from 'socket.io-client';
import styled from 'styled-components';
import { MainYellow } from '../../Assets/Color/Color';
import { ReactComponent as Sendicon_svg } from '../../Assets/Image/Sendicon.svg';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  background-color: #e4e4e4;
`;

const InputBox = styled.input`
  width: 70%;
  font-size: 1.5rem;
  font-family: 'Kakao-Regular';
  background-color: transparent;
  padding: 0 10%;
  border: 0;
  text-shadow: 0 0 0 black;
  :focus {
    outline: none;
  }
`;
const SendIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
  border: 0;
  :active {
    transition: 0.3s;
    background-color: ${MainYellow};
  }
`;

const Chatinput = ({ socket }) => {
  const [Chat, setChat] = useState('');

  const onChangeChatText = (e) => {
    setChat(e.target.value);
  };

  // 입력값 보내기
  const handleSendmessage = (e) => {
    if (e.key === 'Enter') {
      // socket.emit('sendMessage', { Chat });
      setChat({ ...Chat, content: '' });
    }
  };

  return (
    <Container>
      <InputBox
        value={Chat}
        onChange={onChangeChatText}
        placeholder="대화를 입력해주세요.."
      />
      <SendIcon onClick={handleSendmessage}>
        <Sendicon_svg width={40} height={40} />
      </SendIcon>
    </Container>
  );
};

export default Chatinput;
