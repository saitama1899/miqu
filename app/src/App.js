import AppRoutes from './routes'
// Context
import { UserContextProvider} from './context/UserContext'

function App() {
  return (
    <UserContextProvider>
      <AppRoutes />
    </UserContextProvider>
  )
}

export default App
