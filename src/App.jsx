import './App.css';
import Blog from './components/Blog/Blog';
import Consulting from './components/Consulting/Consulting';
import ElectronicMarketing from './components/ElectronicMarketing/ElectronicMarketing';
import Establishment from './components/Establishment/Establishment';
import FactoryManagement from './components/FactoryManagement/FactoryManagement';
import Governance from './components/Governance/Governance';
import InformationTechnology from './components/InformationTechnology/InformationTechnology';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import OurServices from './components/OurServices/OurServices';
import ProjectManagement from './components/ProjectManagement/ProjectManagement';
import ResourcesManagement from './components/ResourcesManagement/ResourcesManagement';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import WhoAreWe from './components/WhoAreWe/WhoAreWe';

import Home from './pages/Home';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


let router = createBrowserRouter([
  {path:"", element:<Layout/>,children:[
    {index:true ,element:<Home/> },
    {path:"whoAreWe",element:<WhoAreWe/>},
    {path:"ourservices",element:<OurServices/>},
    {path:"blog",element:<Blog/>},
    {path:"servicedetails",element:<ServiceDetails/>},
    {path:"resourcesmanagement",element:<ResourcesManagement/>},
    {path:"governance",element:<Governance/>},
    {path:"establishment",element:<Establishment/>},
    {path:"projectManagement",element:<ProjectManagement/>},
    {path:"factoryManagement",element:<FactoryManagement/>},
    {path:"electronicMarketing",element:<ElectronicMarketing/>},
    {path:"Informationtechnology",element:<InformationTechnology/>},
    {path:"consulting",element:<Consulting/>},
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
