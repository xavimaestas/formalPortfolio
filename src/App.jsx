import {
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
  Route
} from 'react-router-dom'
import './App.css'

import Home from "./pages/Home.jsx"
import Layout from "./components/Layout.jsx"

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Layout/> }>
      <Route index element={ <Home/> }/>

    </Route>
  ))
 

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
