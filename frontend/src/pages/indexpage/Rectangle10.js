import React from 'react';
import styled from '@emotion/styled';

const Rectangle10Container = styled.div`
  position: absolute;
  width: 358px;
  height: 54px;
  left: 28px;
  top: 436px;
  background: linear-gradient(173.93deg, #FF1EB2 4.14%, #B200DE 160.68%);
  border-radius: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CreateNewAddress = styled.div`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
  margin-right: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

const Ellipse1 = styled.div`
  width: 13px;
  height: 13px;
  border: 1px solid #FFFFFF;
`;

const Line1 = styled.div`
  width: 7px;
  height: 0px;
  border: 1px solid #FFFFFF;
`;

const Line2 = styled.div`
  width: 7px;
  height: 0px;
  border: 1px solid #FFFFFF;
  transform: rotate(90deg);
`;

const Rectangle10 = () => {
    return (
        <Rectangle10Container>
            <CreateNewAddress>Create New Address</CreateNewAddress>
            <IconContainer>
                <Ellipse1 />
                <Line1 />
                <Line2 />
            </IconContainer>
        </Rectangle10Container>
    );
};

export default Rectangle10;
