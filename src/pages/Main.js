import styled from 'styled-components'
import data from '../data'
import SlideItem from '../components/SlideItem'
import { motion } from 'framer-motion'

const Container = styled.main`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
`

const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 23%;
`

const Main = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: '100%', opacity: 1 }}
      exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.7 } }}
    >
      <Container className='main-container'>
        <SlideContainer>
          {data.slice(0, 4).map((slide) => {
            return <SlideItem key={slide.id} slide={slide} />
          })}
        </SlideContainer>
        <SlideContainer>
          {data.slice(4, 8).map((slide) => {
            return <SlideItem key={slide.id} slide={slide} />
          })}
        </SlideContainer>
        <SlideContainer>
          {data.slice(8, 11).map((slide) => {
            return <SlideItem key={slide.id} slide={slide} />
          })}
        </SlideContainer>
        <SlideContainer>
          {data.slice(11, 15).map((slide) => {
            return <SlideItem key={slide.id} slide={slide} />
          })}
        </SlideContainer>
      </Container>
    </motion.div>
  )
}

export default Main
