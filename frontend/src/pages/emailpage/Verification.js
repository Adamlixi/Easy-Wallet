import React from 'react';
import styled from '@emotion/styled';
import yourImage from '././Group6.png';
import { useNavigate } from 'react-router-dom';

const StyledImage = styled.img`

position: absolute;
width: 40px;
height: 40px;
left: 14px;
top: 10px;

`;
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

// const Rectangle15 = styled.div`
//   position: absolute;
//   width: 358px;
//   height: 54px;
//   left: 28px;
//   top: 526px;
//   background: #D9D9D9;
//   border-radius: 27px;
// `;

const Rectangle15 = styled.div`
position: absolute;
width: 358px;
height: 54px;
left: 28px;
top: 255px;
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



const Rectangle24 = styled.div`
  position: absolute;
  width: 340px;
  height: 6px;
  left: 37px;
  top: 328px;
  background: #D9D9D9;
  border-radius: 2px;
`;

const Title = styled.div`
position: absolute;
width: 139px;
height: 16px;
left: 137px;
top: 22px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
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


/* Rectangle 14 */

const Rectangle14 = styled.div`
box-sizing: border-box;
position: absolute;
width: 358px;
height: 54px;
left: 28px;
top: 425px;
border: 2px solid #FF1EB2;
border-radius: 27px;
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
text-align: center;
color: #FF1EB2;
display: flex;
align-items: center;
justify-content: center;
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

/* Rectangle 17 */

const Rectangle17 = styled.div`
box-sizing: border-box;
position: absolute;
width: 172px;
height: 54px;
left: 214px;
top: 498px;
border: 2px solid #FF1EB2;
border-radius: 27px;
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
text-align: center;
color: #FF1EB2;
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

const StyledInput = styled.input`
  font-family: 'Inter';
  font-size: 16px;
  line-height: 20px;
  color: #0B0F3B;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
`;

function ToCreatePage3() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/succeed');
    };
    return (
        <ToCreateContainer>

            <Rectangle9 />
            <Rectangle12>
                <StyledInput placeholder="Verification Code" />
            </Rectangle12>
            <StyledImage src={yourImage} alt="Your Image Description" />
            <Title>Easy Wallet Cloud</Title>
            <Subtitle>Verification code</Subtitle>
            <HintText> The verification code has been sent successfully, please copy and enter</HintText>
            <Rectangle16 onClick={handleClick}>Confirm</Rectangle16>
        </ToCreateContainer>
    );
}

export default ToCreatePage3;
