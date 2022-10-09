import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SlideImg = styled.img`
  width: 100%;
`
const TextContainer = styled.div`
  position: absolute;
  z-index: 1000;
  bottom: 20px;
  left: 20px;
  padding-right: 0.5rem;
`
const Title = styled.h2`
  color: #fff;
  font-size: 1.75rem;
  line-height: 1;
  margin-bottom: 0.25rem;
`
const Author = styled.h4`
  color: #aaa;
`

const SlideItem = ({slide}) => {
  return (
    <Link key={slide.id} className='slide' to={`/slide/${slide.id}`}>
    <SlideImg src={slide.img} />
    <TextContainer className='text-container'>
      <Title>{slide.title}</Title>
      <Author>{slide.author}</Author>
    </TextContainer>
  </Link>
  )
}

export default SlideItem
