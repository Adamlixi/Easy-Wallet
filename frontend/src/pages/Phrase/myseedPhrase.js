import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

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

const Rectangle15 = styled.div`
position: absolute;
width: 358px;
height: 54px;
left: 28px;
top: 495px;
background:  #FF1EB2;
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

const Subtitle = styled.div`

position: absolute;
width: 153px;
height: 16px;
left: 130px;
top: 22px;

/* Button 1 */
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
/* identical to box height, or 100% */
text-align: center;
color: #FFFFFF;
`;

const HintText1 = styled.div`
position: absolute;
width: 369px;
height: 48px;
left: 22px;
top: 133px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #ACACAC;
`;

const HintText2 = styled.div`
position: absolute;
width: 155px;
height: 16px;
left: 129px;
top: 400px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
text-align: center;
color: #FF89D7;
`;

const HintText3 = styled.div`
position: absolute;
width: 340px;
height: 16px;
left: 37px;
top: 470px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
text-align: center;
color: #FF0000;
`;



/* Rectangle 12 */
const Rectangle12 = styled.div`
box-sizing: border-box;
position: absolute;
width: 84px;
height: 48px;
left: 22px;
top: 197px;
border: 2px solid #D9D9D9;
border-radius: 10px;

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


const Title = styled.div`
position: absolute;
width: 202px;
height: 16px;
left: 22px;
top: 101px;
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 16px;
/* identical to box height, or 67% */
text-align: center;
color: #1E1E1E;
`;


/* Rectangle 12 */

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
const Rectangle2 = styled.div`
/* Rectangle 15 */


box-sizing: border-box;

position: absolute;
width: 84px;
height: 48px;
left: 117px;
top: 190px;

border: 2px solid #E9B9FF;
border-radius: 10px;
`;
const Rectangle3 = styled.div`
box-sizing: border-box;

position: absolute;
width: 84px;
height: 48px;
left: 212px;
top: 190px;

border: 2px solid #E9B9FF;
border-radius: 10px;
`;
const Rectangle4 = styled.div`
box-sizing: border-box;

position: absolute;
width: 84px;
height: 48px;
left: 307px;
top: 190px;

border: 2px solid #E9B9FF;
border-radius: 10px;
`;
const Rectangle5 = styled.div`
box-sizing: border-box;

position: absolute;
width: 84px;
height: 48px;
left: 22px;
top: 259px;

border: 2px solid #E9B9FF;
border-radius: 10px;
`;
const Rectangle6 = styled.div`
box-sizing: border-box;

position: absolute;
width: 84px;
height: 48px;
left: 117px;
top: 259px;

border: 2px solid #E9B9FF;
border-radius: 10px;
`;
const Rectangle7 = styled.div`
box-sizing: border-box;

position: absolute;
width: 84px;
height: 48px;
left: 212px;
top: 259px;

border: 2px solid #E9B9FF;
border-radius: 10px;
`;
const Rectangle8 = styled.div`
box-sizing: border-box;

position: absolute;
width: 84px;
height: 48px;
left: 307px;
top: 259px;

border: 2px solid #E9B9FF;
border-radius: 10px;
`;

const Rectangle01 = styled.div`
position: absolute;
width: 19px;
height: 16px;
left: 36px;
top: 206px;

/* Button 1 */

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
/* identical to box height, or 100% */


color: #1E1E1E;
`;

const Rectangle02 = styled.div`
position: absolute;
width: 17px;
height: 16px;
left: 130px;
top: 206px;

/* Button 1 */

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
/* identical to box height, or 100% */


color: #1E1E1E;

`;
const Rectangle03 = styled.div`
position: absolute;
width: 27px;
height: 16px;
left: 225px;
top: 206px;

/* Button 1 */

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
/* identical to box height, or 100% */


color: #1E1E1E;

`;
const Rectangle04 = styled.div`
position: absolute;
width: 39px;
height: 16px;
left: 320px;
top: 206px;

/* Button 1 */

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
/* identical to box height, or 100% */


color: #1E1E1E;

`;
const Rectangle05 = styled.div`
position: absolute;
width: 36px;
height: 16px;
left: 36px;
top: 275px;

/* Button 1 */

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
/* identical to box height, or 100% */


color: #1E1E1E;

`;
const Rectangle06 = styled.div`
position: absolute;
width: 30px;
height: 16px;
left: 130px;
top: 275px;

/* Button 1 */

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
/* identical to box height, or 100% */


color: #1E1E1E;

`;
const Rectangle07 = styled.div`
position: absolute;
width: 43px;
height: 16px;
left: 225px;
top: 275px;

/* Button 1 */

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
/* identical to box height, or 100% */


color: #1E1E1E;

`;
const Rectangle08 = styled.div`
position: absolute;
width: 54px;
height: 16px;
left: 320px;
top: 275px;

/* Button 1 */

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
/* identical to box height, or 100% */


color: #1E1E1E;
`;



function RecoveryPage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/mapping');
    };

    return (
        <ToCreateContainer>
            <Rectangle9 />
            <Rectangle1 />
            <Rectangle01>let</Rectangle01>
            <Rectangle2 />
            <Rectangle02>us</Rectangle02>
            <Rectangle3 />
            <Rectangle03>work</Rectangle03>
            <Rectangle4 />
            <Rectangle04>together</Rectangle04>
            <Rectangle5 />
            <Rectangle05>on</Rectangle05>
            <Rectangle6 />
            <Rectangle06>the</Rectangle06>
            <Rectangle7 />
            <Rectangle07>web</Rectangle07>
            <Rectangle8 />
            <Rectangle08>project</Rectangle08>
            <Subtitle>Easy Wallet</Subtitle>
            <Title>Your Seed Phrase</Title>
            <HintText1> Created successfully！Take care to save and remember your Seed Phrase</HintText1>
            <Rectangle15 onClick={handleClick}>Already saved，Next</Rectangle15>
        </ToCreateContainer>
    );
}

export default RecoveryPage;