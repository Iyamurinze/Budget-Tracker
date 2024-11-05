import React from "react";
import styled, { keyframes } from "styled-components";
import { useWindowSize } from '../utils/window-size';

export default function Orb() {
    const {width, height} = useWindowSize()
    console.log(width, height)
 
  const moveOrb = keyframes`
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(${width}px, ${height}px);
    }
    100% {
      transform: translate(0, 0);
    }
  `;

  const OrbStyled = styled.div`
    width: 80vh;
    height: 80vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -37vh;
    margin-top: -37vh;
    background: linear-gradient(180deg, #f56692 0%, #f2994a 100%);
    filter: blur(400px);
    animation: ${moveOrb} 5s alternate linear infinite;
  `;

  return <OrbStyled />;
}
