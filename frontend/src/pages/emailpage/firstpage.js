import React from 'react';
import styled from '@emotion/styled';
import yourImage from '././first.png';

const ToCreateContainer = styled.div`
  position: relative;
  width: 414px;
  height: 620px;
  background: url(${yourImage});;
  background-size: cover;
`;

const StyledImage = styled.img`

position: absolute;
width: 414px;
height: 620px;
left: 0px;
top: 0px;

`;

function firstpage() {
    return (
        <ToCreateContainer>

            {/*<StyledImage src={yourImage} alt="Your Image Description" />*/}

        </ToCreateContainer>
    );
}

export default firstpage;
