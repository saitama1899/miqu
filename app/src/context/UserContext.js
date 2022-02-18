import React, {useState,useEffect} from 'react'
import apuestaService from '../services/apuestas'

const Context = React.createContext({})

export function UserContextProvider ({children}) {
  const [user, setUser] = useState(
    () => JSON.parse(window.sessionStorage.getItem('loggedNoteAppUser'))
  )

  return <Context.Provider value={{ user, setUser }}>
    {children}
  </Context.Provider>
}

export default Context