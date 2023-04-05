import React from 'react';
import styled from '@emotion/styled';

const AddressStartContainer = styled.div`
  position: absolute;
  width: 326px;
  height: 16px;
  left: 60px;
  top: 288px;
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

const AddressStart = () => {
    return (
        <AddressStartContainer>
            <AddressStartText>Add an Address to Start：）</AddressStartText>
        </AddressStartContainer>
    );
};

export default AddressStart;
