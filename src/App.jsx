import InformationPage from './pages/information'
import LoginPage from './pages/login'
import { checkValidToken } from './utils/tokenHelper'
import { useSelector } from 'react-redux'

const App = () => {
  const login = useSelector(state => checkValidToken() ?? state.auth.login)

  return (
    login ? <InformationPage /> : <LoginPage />
  )
}

export default App