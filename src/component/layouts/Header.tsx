import React from 'react';
import styled from 'styled-components';
import {COLORS} from '@util/style/theme';
import {MaxWidth} from '@component/layouts/layouts';

export default function Header() {
  
  return (
    <Wrap>
      <InnerWrap>
        <Logo>
          <LogoIcon src="/react-icon.svg" alt="리액트 아이콘"/>
          <LogoText>React</LogoText>
        </Logo>
        <Additional target="_blank" href="https://github.com/developer-choi/case-of-improvement">Github</Additional>
      </InnerWrap>
    </Wrap>
  );
}

export const HEADER_HEIGHT = 60;

const Wrap = styled.header`
  width: 100%;
  position: fixed;
  background-color: ${COLORS.black2};
  top: 0;
`;

const InnerWrap = styled(MaxWidth)`
  display: flex;
  align-items: center;
  height: ${HEADER_HEIGHT}px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoIcon = styled.img`
  width: 22px;
`;

const LogoText = styled.span`
  color: ${props => props.theme.main};
  font-weight: bold;
  margin-left: 3px;
`;

const Additional = styled.a`
  margin-left: auto;
  color: white;
`;
