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
height: 217px;
left: 0px;
top: 402px;
background: #FFFFFF;
border-radius: 20px 20px 0px 0px;
`;

const HintText = styled.div`
position: absolute;
width: 365px;
height: 16px;
left: 24px;
top: 302px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
/* identical to box height, or 133% */

text-align: center;

color: #FFFFFF;

`;

const Subtitle = styled.div`
position: absolute;
width: 57px;
height: 16px;
left: 179px;
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
box-sizing: border-box;
position: absolute;
width: 358px;
height: 54px;
left: 28px;
top: 443px;
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

function FailUpload() {
    return (
        <ToCreateContainer>

            <Rectangle9 />

            <Subtitle>Error</Subtitle>
            <HintText>Please try another method to import</HintText>
            <Rectangle14>Go back and continue to import</Rectangle14>
            <Rectangle15>Create a new one</Rectangle15>
            <Rectangle15>Next</Rectangle15>
        </ToCreateContainer>
    );
}

export default FailUpload;