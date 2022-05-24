import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import styled from 'styled-components';
import 'aos/dist/aos.css';
import Aos from 'aos';


const Container = styled.div`
    display: flex;    
    position: fixed;
    top: 90%;
    min-width: 100%;
    z-index: 5;
    justify-content: center;
`

const Wrap = styled.div`
  display: flex;
  min-width: 25%;
`

const Title = styled.a`
    font-size: 17px;
`

export const BottomNav = () => {
    
    Aos.init();


  return (
    <Container>
      <Wrap
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="0"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="false"
      data-aos-once="false"
      >

        <BottomNavigation
        sx={{width: "100%", borderRadius: "50px",background: "#0A182E",border: "1px solid #65FFDB"}}
        showLabels
        >
            <BottomNavigationAction onClick={() => window.location='#Introduction'} sx={{color: "white", "&:hover": {color: "#65FFDB"}}} icon={<Title>Дом</Title>} />
            <BottomNavigationAction onClick={() => window.location='#AboutMe'} sx={{color: "white", "&:hover": {color: "#65FFDB"}}} icon={<Title>Обо мне</Title>} />
            <BottomNavigationAction onClick={() => window.location='#Projects'} sx={{color: "white", "&:hover": {color: "#65FFDB"}}} icon={<Title>Работа</Title>} />
            <BottomNavigationAction onClick={() => window.location='#Contact'} sx={{color: "white", "&:hover": {color: "#65FFDB"}}} icon={<Title>Контакт</Title>} />
        </BottomNavigation>

      </Wrap>
    </Container>
  )
}
