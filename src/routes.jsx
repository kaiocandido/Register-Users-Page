import { createBrowserRouter } from 'react-router-dom'
import Home from '../src/page/Home'
import ListUsers from '../src/page/ListUser'

const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/lista-de-usuarios', element: <ListUsers /> }
])

export default router