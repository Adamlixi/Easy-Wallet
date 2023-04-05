import React from 'react';
import styled from '@emotion/styled';

const AddressStartContainer = styled.div`
  position: absolute;
  width: 156px;
  height: 16px;
  left: 128px;
  top: 153px;
`;

const AddressStartText = styled.p`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
`;

const word = () => {
    return (
        <AddressStartContainer>
            <AddressStartText>Set Password</AddressStartText>
        </AddressStartContainer>
    );
};

export default word;