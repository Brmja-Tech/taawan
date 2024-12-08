import './App.css';
import Blog from './components/Blog/Blog';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import OurServices from './components/OurServices/OurServices';
import WhoAreWe from './components/WhoAreWe/WhoAreWe';

import Home from './pages/Home';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


let router = createBrowserRouter([
  {path:"", element:<Layout/>,children:[
    {index:true ,element:<Home/> },
    {path:"whoAreWe",element:<WhoAreWe/>},
    {path:"ourservices",element:<OurServices/>},
    {path:"blog",element:<Blog/>},
    {path:"*" , element:<NotFound/>},
  ]}
])

function App() {
  return (
    <div>
  <RouterProvider router={router}/>
  </div>
  );
}

export default App;
