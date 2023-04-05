import React from 'react';
import styled from '@emotion/styled';

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const SetPassword = styled.div`
  position: absolute;
  width: 156px;
  height: 16px;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
`;

const InfoText = styled.div`
  position: absolute;
  width: 329px;
  height: 16px;
  left: 50%;
  top: 40%;
  transform: translateX(-50%);
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
`;

function word() {
    return (
        <PageContainer>
            <SetPassword>Set Password</SetPassword>
            <InfoText>It will be used to unlock your wallet and encrypt local data</InfoText>
        </PageContainer>
    );
}

export default word;
