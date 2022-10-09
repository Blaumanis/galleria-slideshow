import { Routes, Route, useLocation } from 'react-router-dom'
import Slide from '../pages/Slide'
import Main from '../pages/Main'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
  const location = useLocation()
  
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Main />} />
        <Route path='/slide/:id' element={<Slide />} />
        <Route path='*' element={<p>Path not resolved</p>} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
