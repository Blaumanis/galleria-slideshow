import React, {useState} from 'react'
export const GlobalContext = React.createContext(null)

export default ({ children }) => {
    // Use states
    const [start,setStart] = useState(false)

  const store = {
    start: [start,setStart],
  }

  return <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
}
