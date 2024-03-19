import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const FlowerContainer = styled(motion.div)`
  position: absolute;
  bottom: 150px;
  transform: translateX(-50%);
`;

const Petal = styled(motion.div)`
  width: 20px;
  height: 50px;
  background-color: pink;
  border-radius: 50%;
  position: absolute;
`;

const FlowerAnimation = ({ isOpen }) => {
  return (
    <FlowerContainer>
      <Petal
        initial={{ rotate: 45, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <Petal
        initial={{ rotate: 135, scale: 0 }}
        animate={{ rotate: 90, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
      <Petal
        initial={{ rotate: 225, scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
      <Petal
        initial={{ rotate: 315, scale: 0 }}
        animate={{ rotate: 270, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
    </FlowerContainer>
  );
};

export default FlowerAnimation;
