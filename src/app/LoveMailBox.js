import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import LoveAnimation from './LoveAnimation';

const StyledLoveMailBox = styled.div`
  background-color: #ffe6e6;
  padding: 40px;
  border-radius: 20px;
  cursor: pointer;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const IconContainer = styled.div`
  margin-bottom: 20px;
`;

const LargeHeartIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  margin-bottom: 10px;
`;

const ClickToOpenText = styled.p`
  color: black;
  font-size: 1.5rem;
`;

const LoveMailBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledLoveMailBox onClick={handleClick}>
      <IconContainer>
        <LargeHeartIcon icon={faHeart} color="red" />
      </IconContainer>
      {isOpen ? <LoveAnimation /> : <ClickToOpenText>Click to open the love mail box</ClickToOpenText>}
    </StyledLoveMailBox>
  );
};

export default LoveMailBox;
