import { Menu } from '@mui/icons-material';
import { Divider, Drawer, List, ListItem, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { devices } from '../../MediaQueries';
import { LanguageMenu } from './LanguageMenu/LanguageMenu';

export const Navbar : React.FC = () => {
  const [MenuStatus, setMenuStatus] = useState(false);

  const { t } = useTranslation();

  const toggleDrawer = (open : boolean) => {
    setMenuStatus(open);
  };

  return (
    <Container>
      <LanguageMenu />

      <Nav>
        <MenuWrap>
          <HamburgerMenuIcon onClick={() => toggleDrawer(true)} />
          <Drawer
            sx={{
              "& .MuiPaper-root": {
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#0E192B",
                minWidth: "250px",
                color: "#65FFDB",
              },
            }}
            anchor={"right"}
            open={MenuStatus}
            onClose={() => toggleDrawer(false)}
          >
            <Divider />
            <List>
              <ListItem button>
                <ListItemText
                  sx={{ xs: { textAlign: "center" } }}
                  primary={t('navbar.Item1')}
                />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button>
                <ListItemText
                  sx={{ xs: { textAlign: "center" } }}
                  primary={t('navbar.Item2')}
                />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button>
                <ListItemText
                  sx={{ xs: { textAlign: "center" } }}
                  primary={t('navbar.Item3')}
                />
              </ListItem>
            </List>
            <Divider />
          </Drawer>
        </MenuWrap>
        <NavWrap>
          <NavItem>
            <A href="#AboutMe">{t('navbar.Item1')}</A>
          </NavItem>
          <NavItem>
            <A href="#Projects">{t('navbar.Item2')}</A>
          </NavItem>
          <NavItem>
            <A href="#Contact">{t('navbar.Item3')}</A>
          </NavItem>
        </NavWrap>
      </Nav>
    </Container>
  );
};

const NavItem = styled.li`
  letter-spacing: 1px;
  opacity: 0.8;
`;

const A = styled.a`
  color: white;
  text-decoration: none;
  transition: 300ms;
  &:hover {
    color: #65ffdb;
  }
`;

const Nav = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  height: 7vh;
  gap: 2em;
  color: white;
`;

const HamburgerMenuIcon = styled(Menu)``

const MenuWrap = styled.div`
  display: none;
`;

const NavWrap = styled.div`
  display: flex;
  align-items: center;
  height: 7vh;
  gap: 2em;

`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  padding: 0em 3.3em;
  z-index: 2;
  background: #0a182e;
  box-shadow: 0px 1px 50px #0a182e;
  color: white;

  @media only screen and (max-width: ${devices.mobile}px) {
    ${NavWrap} {
      display: none;
    }
    ${MenuWrap} {
      display: block;
    }
  }
`;
