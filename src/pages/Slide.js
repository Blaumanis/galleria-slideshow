import { useLocation } from 'react-router-dom'
import React, { useState, useContext } from 'react'
import data from '../data'
import styled from 'styled-components'
import { FaArrowsAlt } from 'react-icons/fa'
import Footer from '../components/Footer'
import Module from '../components/Module'
import { motion } from 'framer-motion'


const Container = styled.section`
  margin: 5rem 0;
  display: flex;
  gap: 4rem;
  height: 70vh;
  position: relative;
`
const ImgContainer = styled.article``

const ImgWrapper = styled.div`
  position: relative;
  &::before {
    content: '';
    background-color: #fff;
    width: 100px;
    height: 350px;
    position: absolute;
    top: 0;
    right: 0;
  }
`

const MainImg = styled.img`
  width: 500px;
  height: 550px;
  object-fit: cover;
`
const View = styled.button`
  position: absolute;
  bottom: 20px;
  left: 20px;
  border: none;
  color: #fff;
  padding: 0.7rem 1.5rem;
  cursor: pointer;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 250ms ease;
  &:hover {
    background-color: rgba(235, 229, 229, 0.4);
  }
`

const AuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
`

const TitleContainer = styled.div`
  top: 0;
  left: 420px;
  position: absolute;
`

const Title = styled.h2`
  font-size: 2.75rem;
  line-height: 1;
  width: 50%;
`

const Author = styled.h4`
  color: #aaa;
  margin-top: 0.5rem;
`

const AuthorImg = styled.img`
  width: 128px;
`

const DescContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 550px;
  position: relative;
  width: 100%;
`

const Year = styled.p`
  text-align: right;
  color: #aaa;
  opacity: 0.2;
  font-size: 10rem;
  line-height: 0.9;
  position: absolute;
  top: 0;
  right: 0;
  font-weight: bolder;
`

const Desc = styled.p`
  width: 400px;
  line-height: 1.8;
  color: gray;
  padding-top: 6rem;
  font-weight: 600;
  font-size: 0.9rem;
`

const Source = styled.a`
  color: #aaa;
  font-size: 0.85rem;
  letter-spacing: 1px;
`

const Slide = () => {
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const slide = data.find((d) => d.id.toString() === path)

  const [isOpen, setIsOpen] = useState(false)
  
  const toggleModule = () => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: '100%', opacity: 1 }}
      exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.7 } }}
    >
      <Container className='slide-container'>
        <ImgContainer className='img-container'>
          <ImgWrapper className='img-wrapper'>
            <MainImg className='main-img' src={`.${slide.heroImg}`} />
            <View onClick={() => setIsOpen(true)} className='view-btn'>
              <FaArrowsAlt style={{ marginRight: '0.4rem' }}></FaArrowsAlt>VIEW
              IMAGE
            </View>
          </ImgWrapper>
        </ImgContainer>
        <AuthorContainer className='author-container'>
          <TitleContainer className='title-container'>
            <Title>{slide.title}</Title>
            <Author>{slide.author}</Author>
          </TitleContainer>
          <AuthorImg src={`.${slide.artistImg}`} />
        </AuthorContainer>
        <DescContainer className='desc-article'>
          <Year className='year'>{slide.year}</Year>
          <Desc className='desc'>{slide.desc}</Desc>
          <Source href={slide.link}>GO TO SOURCE</Source>
        </DescContainer>
      </Container>
      <Footer slide={slide} />
      {isOpen ? <Module slide={slide} toggleModule={toggleModule} /> : ''}
    </motion.div>
  )
}

export default Slide
