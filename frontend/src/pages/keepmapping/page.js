import React from 'react';
import styled from '@emotion/styled';
import yourImage from '././Group7.png';
import { useNavigate } from 'react-router-dom';

const ToCreateContainer = styled.div`
  position: relative;
  width: 414px;
  height: 620px;
  background: linear-gradient(178.38deg, #FF1EB2 1.38%, #D41DD8 34.69%, #B200DE 34.69%);
`;

const StyledImage = styled.img`
position: absolute;
width: 70px;
height: 70px;
left: 171px;
top: 45px;
`;

const Rectangle9 = styled.div`
  position: absolute;
  width: 414px;
  height: 396px;
  left: 0px;
  top: 224px;
  background: #FFFFFF;
  border-radius: 20px 20px 0px 0px;
`;

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
  width: 345px;
  height: 16px;
  left: 34px;
  top: 138px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
`;

const Subtitle = styled.div`
  position: absolute;
  width: 334px;
  height: 16px;
  left: 34px;
  top: 165px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
`;

const HintText = styled.div`
position: absolute;
width: 358px;
height: 48px;
left: 42px;
top: 357px;
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
width: 172px;
height: 54px;
left: 28px;
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


const Rectangle20 = styled.div`
position: absolute;
width: 33px;
height: 16px;
left: 190px;
top: 584px;
font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 16px;
text-align: center;
color: #FF89D7;
`;

const words1 = styled.div`
position: absolute;
width: 163px;
height: 16px;
left: 121px;
top: 444px;
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
text-align: center;
color: #FF1EB2;
;`;




function ToCreatePage1() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/email');
    };
    return (
        <ToCreateContainer>
            <Rectangle9 />
            <StyledImage src={yourImage} alt="Your Image Description" />
            <Rectangle14>Saved by Easy Wallet</Rectangle14>
            <Rectangle16>Saved by Google</Rectangle16>
            <Rectangle17>Saved by iCloud</Rectangle17>
            <Title>Keep Mapping file</Title>
            <Subtitle>Properly save the Mapping file in the following ways</Subtitle>
            <HintText>In addition to saving locally, you can choose the following storage methods to make the next upload more convenient.</HintText>
            <Rectangle15 onClick={handleClick}>
                Download the Mapping file
            </Rectangle15>
            <Rectangle20>Skip</Rectangle20>
        </ToCreateContainer>
    );
}

export default ToCreatePage1;
