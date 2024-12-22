import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import App from './App';
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Project/Project';
import Technology from './components/Technology/Technology';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> 
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="project" element={<Project />} /> 
      <Route path="technology" element={<Technology />} />


    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}>

   </RouterProvider>

   <App/>
  </StrictMode>,
)
