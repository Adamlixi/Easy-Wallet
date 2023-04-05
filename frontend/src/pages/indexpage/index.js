import React from 'react';
import styled from '@emotion/styled';
import yourImage from '././image1.png';
import { useNavigate } from 'react-router-dom';



const StyledImage = styled.img`
position: absolute;
width: 151px;
height: 151px;
left: 132px;
top: 75px;
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
height: 217px;
left: 0px;
top: 402px;
background: #FFFFFF;
border-radius: 20px 20px 0px 0px;
`;

const Subtitle = styled.div`  
 position: absolute;
width: 158px;
height: 16px;
left: 128px;
top: 246px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 16px;
/* identical to box height, or 67% */

text-align: center;

background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;


`;

const HintText = styled.div`
position: absolute;
width: 272px;
height: 16px;
left: 71px;
top: 350px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 16px;
/* identical to box height, or 80% */

text-align: center;
color: #FFFFFF;
`;

/* Rectangle 16 */
const Rectangle16 = styled.div`
position: absolute;
width: 358px;
height: 54px;
left: 28px;
top: 436px;
background: linear-gradient(173.93deg, #FF1EB2 4.14%, #B200DE 160.68%);
border-radius: 27px;
`;

// /* Rectangle 14 */
//
// const Rectangle14 = styled.div`
// box-sizing: border-box;
// position: absolute;
// width: 266px;
// height: 16px;
// left: 74px;
// top: 535px;
// border: 2px solid #FF1EB2;
// border-radius: 27px;
// font-family: 'DM Sans';
// font-style: normal;
// font-weight: 700;
// font-size: 16px;
// line-height: 16px;
// text-align: center;
// color: #FF1EB2;
// display: flex;
// align-items: center;
// justify-content: center;
// `;

// const Rectangle15 = styled.div`
// box-sizing: border-box;
// position: absolute;
// width: 358px;
// height: 54px;
// left: 28px;
// top: 425px;
// border: 2px solid #FF1EB2;
// border-radius: 27px;
// font-family: 'DM Sans';
// font-style: normal;
// font-weight: 700;
// font-size: 16px;
// line-height: 16px;
// text-align: center;
// color: #FF1EB2;
// display: flex;
// align-items: center;
// justify-content: center;
// `;

/* Rectangle 16 */
const Rectangle17 = styled.div`
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

const Rectangle18 = styled.div`
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


const Rectangle15 = styled.div`
box-sizing: border-box;
position: absolute;
width: 358px;
height: 54px;
left: 28px;
top: 518px;
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


const Rectangle14 = styled.div`
position: absolute;
width: 358px;
height: 54px;
left: 28px;
top: 436px;
background: linear-gradient(173.93deg, #FF1EB2 4.14%, #B200DE 160.68%);
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



function HomePage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/password_setting');
    };
    const handleClick1 = () => {
        navigate('/ImportPage');
    };

    return (
        <ToCreateContainer>
            <Rectangle9 />
            <Subtitle>Easy Wallet🐽</Subtitle>
            <StyledImage src={yourImage} alt="Your Image Description" />
            <HintText>Add an Address to Start：）</HintText>
            <Rectangle14 onClick={handleClick}>Create New Address</Rectangle14>
            <Rectangle15 onClick={handleClick1}>Import Address</Rectangle15>
        </ToCreateContainer>
    );
}

export default HomePage;
