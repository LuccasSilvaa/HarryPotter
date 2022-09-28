import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home/index';
import Characters from '../pages/Characters/index';
import Staff from '../pages/Staff/index';
import Students from '../pages/Students/index';


export default function Rotas() {
  return(
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/characters' element={<Characters/>}/>
          <Route path='/staff' element={<Staff/>}/>
          <Route path='/students' element={<Students/>}/>
        </Routes>
      </Router>
  )
}
