
import Footer from '../Footer/Footer';
import NavBar from '../NavBar'
import { Outlet, useLocation } from 'react-router-dom';




function Layout() {
  const location = useLocation(); // React Router hook to get current location

  return <>
  

{location.pathname !== '/' && <NavBar/>}
  <div>
      <Outlet/>
    </div>  

  <Footer/>

      
    </>
  
}

export default Layout