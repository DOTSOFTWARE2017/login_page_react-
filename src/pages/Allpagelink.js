import Login from './login';
import About from './About';
import { Home } from './Home';
import { BrowserRouter,Routes,Route ,Link} from 'react-router-dom';

 function Allpagelink(){
 
return(

<BrowserRouter>
<div className='container-fluied p-3 bg-dark d-flex justify-content-around'>
<Link to='/'>Home</Link>
<Link to='/About'>About</Link>
<Link to='/Login'>Login</Link>
</div>

    <Routes>
      
      <Route path='/' element={<Home/>}>Home</Route>
      <Route path='/About' element={<About/>}>Home</Route>
      <Route path='/Login' element={<Login/>}>Home</Route>
    </Routes>
</BrowserRouter>
)

 }
 export default Allpagelink