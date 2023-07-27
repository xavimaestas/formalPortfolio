import {
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
  Route
} from 'react-router-dom'
import './App.css'

import Home, {loader as homePageLoader} from "./pages/Home.jsx"
import Projects from "./pages/Projects.jsx"
import About from "./pages/About.jsx"
import Layout from "./components/Layout.jsx"
import Error from "./components/Error.jsx"


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Layout/> } loader={homePageLoader} errorElement={ <Error/>}>
      <Route index element={ <Home/> }/>
      <Route path="/projects" element={ <Projects/> }/>
      <Route path="/about" element={ <About/> }/>
    </Route>
  ))
 

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
