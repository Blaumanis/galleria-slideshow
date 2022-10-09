import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const HeaderComponent = styled.header`
  height: 15vh;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const LogoImg = styled.img`
  width: 125px;
`
const Header = () => {
  const {start} = useContext(GlobalContext)
  return (
    <div>
      <HeaderComponent>
        <Link to='/' onClick={() => start[1](false)}>
          <LogoImg src='../images/logo.svg' />
        </Link>
        <Link
          className='slide-link'
          to={!start[0] ? '/slide/1' : '/'}
          onClick={() => start[1](!start[0])}
        >
          {!start[0] ? 'START SLIDESHOW' : 'STOP SLIDESHOW'}
        </Link>
      </HeaderComponent>
    </div>
  )
}

export default Header
