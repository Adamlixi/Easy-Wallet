import React from 'react';
import styled from '@emotion/styled';

const Rectangle11Container = styled.div`
  position: absolute;
  width: 358px;
  height: 54px;
  left: 28px;
  top: 510px;
  border: 2px solid #FF1EB2;
  border-radius: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImportAddress = styled.div`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  color: #FF1EB2;
  margin-right: 10px;
`;

const IconGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Line3 = styled.div`
  width: 7px;
  height: 0px;
  border: 1px solid #FF1EB2;
  transform: rotate(90deg);
`;

const Group2 = styled.div`
  display: flex;
  align-items: center;
`;

const Line2 = styled.div`
  width: 7px;
  height: 2.5px;
  border: 1px solid #FF1EB2;
  transform: rotate(-180deg);
`;

const Ellipse1 = styled.div`
  box-sizing: border-box;
  width: 13px;
  height: 13px;
  border: 1px solid #FF1EB2;
  transform: rotate(90deg);
  margin-left: 3px;
`;

const Rectangle11 = () => {
    return (
        <Rectangle11Container>
            <ImportAddress>Import Address</ImportAddress>
            <IconGroup>
                <Line3 />
                <Group2>
                    <Line2 />
                    <Ellipse1 />
                </Group2>
            </IconGroup>
        </Rectangle11Container>
    );
};

export default Rectangle11;
