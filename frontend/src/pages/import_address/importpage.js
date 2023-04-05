import React from 'react';
import styled from '@emotion/styled';
import yourImage from '././Group6.png';
import { useNavigate } from 'react-router-dom';


const ToCreateContainer = styled.div`
  position: relative;
  width: 414px;
  height: 620px;
  background: linear-gradient(178.38deg, #FF1EB2 1.38%, #D41DD8 34.69%, #B200DE 34.69%);
`;

const StyledImage = styled.img`

position: absolute;
width: 40px;
height: 40px;
left: 14px;
top: 10px;

`;

const Rectangle9 = styled.div`
position: absolute;
width: 414px;
height: 555px;
left: 0px;
top: 65px;
background: #FFFFFF;
border-radius: 20px 20px 0px 0px;
`;

const Title = styled.div`
position: absolute;
width: 121px;
height: 16px;
left: 146px;
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
width: 227px;
height: 16px;
left: 28px;
top: 101px;
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 16px;
color: #1E1E1E;
`;

const HintText1 = styled.div`
position: absolute;
width: 358px;
height: 48px;
left: 28px;
top: 131px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #ACACAC;
`;

const HintText2 = styled.div`
/* If you don‘t have mapping file, you can recover with Metamask, recovery phrase or Private Key. */
position: absolute;
width: 358px;
height: 32px;
left: 28px;
top: 418px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #ACACAC;
`;

const Rectangle1 = styled.div`
position: absolute;
width: 358px;
height: 54px;
left: 28px;
top: 181px;
background: #FF1EB2;
border-radius: 27px;

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

const Rectangle2 = styled.div`
position: absolute;
width: 358px;
height: 54px;
left: 28px;
top: 469px;
background: #FF1EB2;
border-radius: 27px;


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

const Rectangle14 = styled.div`
box-sizing: border-box;
position: absolute;
width: 358px;
height: 54px;
left: 28px;
top: 254px;
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
top: 327px;
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
top: 327px;
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


function ImportPage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/fail');
    };

    return (
        <ToCreateContainer>

            <Rectangle9 />
            <Title>Import Address</Title>
            <Subtitle>Import Mapping file</Subtitle>
            <StyledImage src={yourImage} alt="Your Image Description" />
            <HintText1>If you have mapping file, choose one of the methods below to import</HintText1>
            <HintText2> If you don‘t have mapping file, you can recover with Metamask, recovery phrase or Private Key</HintText2>
            <Rectangle1 onClick={handleClick}>Upload from local device</Rectangle1>
            <Rectangle2 >Recover from Metamask</Rectangle2>
            <Rectangle14>From Easy Wallet</Rectangle14>
            <Rectangle16>From Google</Rectangle16>
            <Rectangle17>From iCloud</Rectangle17>
        </ToCreateContainer>
    );
}

export default ImportPage;