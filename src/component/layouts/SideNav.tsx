import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {COLORS} from '@util/style/theme';

export interface SideNavItem {
  name: string;
  href: string;
  childItems?: Omit<SideNavItem, 'childItems'>[];
}

export interface SideNavProps {
  navItems: SideNavItem[];
}

export default function SideNav({navItems}: SideNavProps) {
  return (
    <Wrap>
      <Nav>
        <ParentUl>
          {navItems.map(({name, href, childItems}) => (
            <li key={href}>
              <NavLink href={href} name={name}/>
      
              {childItems &&
                <ChildUl>
                  {childItems.map(({name, href}) => (
                    <li key={href}>
                      <NavLink href={href} name={name}/>
                    </li>
                  ))}
                </ChildUl>
              }
            </li>
          ))}
        </ParentUl>
      </Nav>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 300px;
  height: 100%;
`;

const Nav = styled.nav`
  position: fixed;
  height: 100%;
  background-color: ${COLORS.gray1};
  
  margin-right: -999px;
  padding-right: 999px;
  padding-left: 40px;
  padding-top: 70px;
`;

const ParentUl = styled.ul`

`;

const ChildUl = styled.ul`

`;

function NavLink({name, href}: Pick<SideNavItem, 'name' | 'href'>) {
  const {pathname} = useRouter();
  const active = pathname.startsWith(href);
  
  return (
    <Link href={href} passHref>
      <Anchor active={active}>
        {name}
        {active &&
        <Line/>
        }
      </Anchor>
    </Link>
  );
}

const Anchor = styled.a<{active: boolean}>`
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  position: relative;
  line-height: 2;
`;

const Line = styled.div`
  height: 130%;
  width: 4px;
  background-color: ${props => props.theme.main};
  
  position: absolute;
  left: -20px;
  
  top: 50%;
  transform: translateY(-50%);
`;
