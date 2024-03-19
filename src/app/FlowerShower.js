import React from 'react';
import styled from 'styled-components';
import FlowerAnimation from './FlowerAnimation';

const FlowersContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FlowerShower = ({ count }) => {
  const flowers = Array.from({ length: count }, (_, index) => <FlowerAnimation key={index} />);
  
  return <FlowersContainer>{flowers}</FlowersContainer>;
};

export default FlowerShower;
