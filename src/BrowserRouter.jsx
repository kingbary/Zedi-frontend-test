import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App'
import UserPage from './components/user/UserPage'
import HomePage from './components/home/HomePage'

export const Router = (createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />}  />
      <Route path="user/:num/:name" element={<UserPage />} />
    </Route>
  )
))
