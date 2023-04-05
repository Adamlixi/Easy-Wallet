import React from 'react';
import styled from '@emotion/styled';
import yourImage from '././Group4.png';
// import { saveAs } from 'file-saver';
// import { createObjectCsvWriter } from 'csv-writer';
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
height: 217px;
left: 0px;
top: 402px;
background: #FFFFFF;
border-radius: 20px 20px 0px 0px;
`;

const Subtitle = styled.div`
position: absolute;
width: 246px;
height: 16px;
left: 84px;
top: 273px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 16px;
/* identical to box height, or 67% */

text-align: center;

color: #FFFFFF;

`;

const HintText = styled.div`
position: absolute;
width: 316px;
height: 32px;
left: 49px;
top: 302px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
/* or 133% */

text-align: center;

color: #FFFFFF;

`;

/* Rectangle 16 */
const Rectangle16 = styled.div`
position: absolute;
width: 358px;
height: 54px;
left: 28px;
top: 443px;

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

/* Rectangle 14 */

const Rectangle14 = styled.div`

box-sizing: border-box;

position: absolute;
width: 358px;
height: 54px;
left: 28px;
top: 516px;

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

const Rectangle15 = styled.div`
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

const StyledImage = styled.img`
position: absolute;
width: 124px;
height: 124px;
left: 145px;
top: 121px;
`;

function succeedpage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/RecoveryPage');
    };

    return (
        <ToCreateContainer>
            <Rectangle9 />
            <StyledImage src={yourImage} alt="Your Image Description" />
            <Subtitle>Saved successfully！</Subtitle>
            <HintText>You can use your wallet now! You can still find your mapping file in the wallet and save it</HintText>
            <Rectangle16 onClick={handleClick}>Start Easy Wallet！</Rectangle16>
            <Rectangle14>Go back and continue to save</Rectangle14>
        </ToCreateContainer>
    );
}

export default succeedpage;