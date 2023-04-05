import React from 'react';
import styled from '@emotion/styled';

const ToCreateContainer = styled.div`
  position: relative;
  width: 414px;
  height: 620px;
  background: linear-gradient(178.38deg, #FF1EB2 1.38%, #D41DD8 34.69%, #B200DE 34.69%);
`;


const Rectangle9 = styled.div`
position: absolute;
width: 414px;
height: 560px;
left: 0px;
top: 60px;
background: #FFFFFF;
border-radius: 20px 20px 0px 0px;
`;

const Title = styled.div`
position: absolute;
width: 202px;
height: 16px;
left: 22px;
top: 101px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 16px;
/* identical to box height, or 67% */

text-align: center;

color: #1E1E1E;
`;

const Subtitle = styled.div`
position: absolute;
width: 205px;
height: 16px;
left: 34px;
top: 101px;
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 16px;
text-align: center;
color: #1E1E1E;

`;

const HintText = styled.div`
position: absolute;
width: 358px;
height: 32px;
left: 31px;
top: 131px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #ACACAC;
`;

/* Rectangle 16 */
const Rectangle16 = styled.div`
box-sizing: border-box;
position: absolute;
width: 358px;
height: 54px;
left: 28px;
top: 283px;

background: #FF1EB2;
border-radius: 27px;
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
text-align: center;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
`;

const Rectangle12 = styled.div`
box-sizing: border-box;

position: absolute;
width: 358px;
height: 54px;
left: 28px;
top: 179px;

border: 2px solid #D9D9D9;
border-radius: 10px;
padding: 0 16px;

input {
  font-family: 'Inter';
  font-size: 16px;
  line-height: 20px;
  color: #0B0F3B;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
}
`;


const Rectangle1 = styled.div`
box-sizing: border-box;

position: absolute;
width: 84px;
height: 48px;
left: 22px;
top: 190px;

border: 2px solid #E9B9FF;
border-radius: 10px;
`;

function yourseed() {
    return (
        <ToCreateContainer>
            <Rectangle9 />
            <Rectangle12 />
            <Title>Easy Wallet</Title>
            <Subtitle>Your Seed Phrase</Subtitle>
            <HintText> Created successfully！Take care to save and remember your Seed Phrase</HintText>
            <Rectangle16 >Already saved，Next</Rectangle16>
        </ToCreateContainer>
    );
}

export default yourseed;