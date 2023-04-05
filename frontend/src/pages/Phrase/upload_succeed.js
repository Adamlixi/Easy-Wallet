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

const Rectangle24 = styled.div`
position: absolute;
width: 340px;
height: 6px;
left: 37px;
top: 165px;
background: #D9D9D9;
border-radius: 2px;
`;

const Rectangle15 = styled.div`
position: absolute;
width: 358px;
height: 54px;
left: 28px;
top: 495px;
background: #D9D9D9;
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

const Title = styled.div`
position: absolute;
width: 153px;
height: 16px;
left: 130px;
top: 22px;
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
text-align: center;
color: #FFFFFF;
`;

const HintText = styled.div`
position: absolute;
width: 388px;
height: 16px;
left: 37px;
top: 98px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #ACACAC;
`;


function SucceedUpload() {
    return (
        <ToCreateContainer>

            <Rectangle9 />
            <Title>Import Seed Phrase</Title>

            <HintText>Fill in the blank, tap the space to enter or add. </HintText>
            <Rectangle15>Next</Rectangle15>
        </ToCreateContainer>
    );
}

export default SucceedUpload;