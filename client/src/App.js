
import './App.css';
import {BrowserRouter as Router,Link, Routes,Route} from 'react-router-dom';
import Upload from './pages/Upload.js';
import Home from './pages/Home.js';
function App() {
  return (
    <div className="container">
      <Router>
        <nav className='nav'>
          <div className="nav-brand"><h1>Snapshots</h1></div>
          <ul className='nav-items'>
             <li className='nav-item'>
               <Link to="/" className='text-white'>Gallery</Link>
             </li>
             <li className='nav-item '>
               <Link to="/upload" className='text-white'>Upload</Link>
             </li>
          </ul>

        </nav>
        <Routes>
                    <Route element={<Upload/>} path="/upload" />
                    <Route element={<Home/>} path="/" />
                </Routes>
      </Router>
     
    </div>
  );
}

export default App;


