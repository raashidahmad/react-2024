import { ExpensiveCalculation } from './ExpensiveCalculation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './home';
import { Login } from './Login';
import { PrivateRoutes } from './PrivateRoutes';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route element={<PrivateRoutes />}>
            <Route exact path="/" Component={Home} />
            <Route path="/home" Component={Home} />
            <Route path="/expnsive" Component={ExpensiveCalculation} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
