import React, {useRef} from 'react'
import styled from 'styled-components'
import { FaStepBackward } from "react-icons/fa";
import { FaStepForward } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Container = styled.footer`
    height: 100px;
    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const TitleContainer = styled.div``
const Title = styled.h3``
const Author = styled.h4`
    color: #aaa;
    font-size: 0.9rem;
    padding-top: 0.5rem;
    font-weight: normal;
`
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    cursor: pointer;
`
const Line = styled.div`
   width: 100%;
   background-color: #aaa5;
   height: 1px;
`

const Footer = ({slide}) => {

    const backID = `/slide/${slide.id-1}`
    const forwardID = `/slide/${slide.id+1}`
    const backIdValue = backID.split('/')[2]
    const forwardIdValue = forwardID.split('/')[2]



   
    const lineRef = useRef()
    const lineSet = () => {
        console.log(lineRef.current);
    }
    


  return (
    <>
    <Line ref={lineRef} className="line"></Line>
    <Container className='footer'>
    <TitleContainer>
      <Title>{slide.title}</Title>
      <Author>{slide.author}</Author>
    </TitleContainer>
    <ButtonContainer>
        <Link onClick={()=>lineSet()} to={backID} className={backIdValue==0 ? 'slide-btn lock' : 'slide-btn'}><FaStepBackward></FaStepBackward></Link>
        <Link onClick={()=>lineSet()} to={forwardID} className={forwardIdValue==16 ? 'slide-btn lock' : 'slide-btn'}><FaStepForward></FaStepForward></Link>
    </ButtonContainer>
    </Container>
    </>
  )
}

export default Footer
