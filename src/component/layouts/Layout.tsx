import React, {ReactNode} from 'react';
import styled from 'styled-components';
import SideNav, {SideNavItem} from '@component/layouts/SideNav';
import Header, {HEADER_HEIGHT} from '@component/layouts/Header';
import {MaxWidth} from '@component/layouts/layouts';

export interface ReactLayoutProp {
  children: ReactNode;
}

export default function Layout({children}: ReactLayoutProp) {
  
  return (
    <>
      <Header/>
      <Center>
        <ChildrenWrap>
          {children}
        </ChildrenWrap>
        <SideNav navItems={navItems}/>
      </Center>
    </>
  );
}

const Center = styled(MaxWidth)`
  height: 100%;
  display: flex;
  margin-top: ${HEADER_HEIGHT}px;
`;

const ChildrenWrap = styled.article`
  flex-grow: 1;
  padding-top: 80px;
`;

export const navItems: SideNavItem[] = [
  {
    name: 'example1',
    href: '/example1',
    childItems: [
      {name: 'example2', href: '/example2'},
    ]
  }
];
