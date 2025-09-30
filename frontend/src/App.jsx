import './App.css'
import { UserProvider } from './Context/UserContext'
import Router from './Router/Router'

const App = () => {
  return (
    <UserProvider>
      <Router/>
    </UserProvider>
  )
}

export default App