import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import yourImage from '././Group4.png';
import yourImage1 from '././Group6.png';


const StyledImage1 = styled.img`

position: absolute;
width: 40px;
height: 40px;
left: 14px;
top: 10px;

`;

const PasswordContainer = styled.div`
  position: relative;
  width: 414px;
  height: 620px;
  background: linear-gradient(180deg, #FF1EB2 4.76%, #B200DE 63.15%);
`;

const Checkbox = styled.input`
  position: absolute;
  left: 57px;
  top: 459px;
  appearance: none;
  outline: none;

  &:before {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    border: 1px solid #000;
    background-color: #fff;
    box-sizing: border-box;
  }

  &:checked:before {
    background-color: #000;
  }
`;

const SetPassword = styled.div`
  position: absolute;
width: 156px;
height: 16px;
left: 129px;
top: 153px;
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 16px;
text-align: center;
color: #FFFFFF;
`;

const PasswordDescription = styled.div`
  position: absolute;
  width: 329px;
  height: 16px;
  left: 37px;
  top: 180px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
`;

const AgreementLabel = styled.label`
  position: absolute;
  width: 240px;
  height: 16px;
  left: 87px;
  top: 462px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #1E1E1E;
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

/* Set Password Logo */
const LogoContainer = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  left: 14px;
  top: 10px;
`;

const Vector2 = styled.div`
  position: absolute;
  width: 12px;
  height: 6px;
  left: 37px;
  top: 24px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  transform: rotate(90deg);
`;

const Rectangle17 = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  left: 14px;
  top: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 27px;
`;

const Rectangle12 = styled.div`
 box-sizing: border-box;
position: absolute;
width: 358px;
height: 54px;
left: 28px;
top: 274px;
background: #F5F5F5;
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

const Rectangle14 = styled.div`
box-sizing: border-box;
position: absolute;
width: 358px;
height: 54px;
left: 28px;
top: 350px;
background: #F5F5F5;
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

const Button = styled.div`
  position: absolute;
  width: 358px;
  height: 54px;
  left: 28px;
  top: 495px;
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

// Group 5
const Group5 = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  left: 78px;
  top: 464px;
`;

// Vector 3
const Vector3 = styled.div`
  position: absolute;
  width: 7px;
  height: 5px;
  left: 81px;
  top: 468px;
  border: 1px solid #FFFFFF;
  transform: rotate(45deg);
`;

// Ellipse 2
const Ellipse2 = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  left: 78px;
  top: 464px;
  background: #FF1EB2;
  border-radius: 50%;
`;




const Group4 = styled.div`position: absolute; width: 70px; height: 70px; left: 171px; top: 60px;`;

const Frame = styled.div`position: absolute; left: 21.33%; right: 18.67%; top: 14.96%; bottom: 15%; background: #FFFFFF;`;

const Ellipse3 = styled.div `position: absolute; width: 70px; height: 70px; left: 171px; top: 60px; background: rgba(255, 255, 255, 0.15);`;


const StyledImage = styled.img`
position: absolute;
width: 60px;
height: 60px;
left: 176px;
top: 65px;

`;


function PasswordPage() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/create');
    };

    return (

        <PasswordContainer>
            <StyledImage src={yourImage} alt="Your Image Description" />
            <StyledImage1 src={yourImage1} alt="Your Image Description" />
            <SetPassword><span style={{ display: 'inline-block' }}>Set Password</span>
            </SetPassword>
            <PasswordDescription>
                It will be used to unlock your wallet and encrypt local data
            </PasswordDescription>
            <Rectangle9 />
            <Checkbox type="checkbox" />
            <AgreementLabel>
                I have read and agree to the Terms of Use
            </AgreementLabel>
            <Rectangle12>
                <StyledInput placeholder="Username" />
            </Rectangle12>
            <Rectangle14>
                <StyledInput placeholder="Password" />
            </Rectangle14>
            <Button onClick={handleClick}>Next</Button>
            {/*<Button>Next</Button>*/}
        </PasswordContainer>
    );
}

export default PasswordPage;
