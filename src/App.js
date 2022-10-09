import Header from "./components/Header";
import {BrowserRouter} from 'react-router-dom'
import AnimatedRoutes from "./components/AnimatedRoutes";
import GlobalState from './context/GlobalState';

function App() {
  
  return (
    <GlobalState>
    <div style={{padding:'0 2rem'}}>
      <BrowserRouter>
      <Header/>
      <AnimatedRoutes/>
      </BrowserRouter>
    </div>
    </GlobalState>
  )
}

export default App;
