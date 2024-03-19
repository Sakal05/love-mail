import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const GradientText = styled(motion.h1)`
  background: linear-gradient(45deg, #ff8a00, #e52e71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center; /* Center the text */
  width: 100%; /* Make the text span full width */
`;

const LoveAnimation = () => {
  return (
    <GradientText
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      Happy 22nd Birthday, Babe! Love you, oun.
    </GradientText>
  );
};

export default LoveAnimation;
