import React, { useState } from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import russianFlag from "../../../images/ru.svg"
import americanFlag from "../../../images/us.svg"

export const LanguageMenu : React.FC = () => {

    const { i18n } = useTranslation();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleLanguageChange = (event : React.MouseEvent<HTMLLIElement>) => {
        const target = event.target as Element
        const lang = target.id 
        i18n.changeLanguage(lang)
    }

    return (
        <Container>
            <Button onClick={handleClick} >
                <LanguageImage />
            </Button>

            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
            >
                <StyledMenuItem id="ru" onClick={(e) => {handleClose(); handleLanguageChange(e)}}>
                    <CountryImage src={russianFlag} />
                    Русский
                </StyledMenuItem>
                <StyledMenuItem id="en" onClick={(e) => {handleClose(); handleLanguageChange(e)}}>
                    <CountryImage src={americanFlag} />
                    English
                </StyledMenuItem>
            </Menu>
        </Container>
    )
}

const CountryImage = styled.img`
    width: 25px;
    height: 25px;
`

const StyledMenuItem = styled(MenuItem)`
    display: flex;
    gap: 0.5em;
`

const LanguageImage = styled(LanguageIcon)`
    font-size: 30px !important;
  &:hover {
    color: #65ffdb;
    cursor: pointer;
  }
`

const Button = styled.button`
    background: transparent;
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
`

const Container = styled.div``
