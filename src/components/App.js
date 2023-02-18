import '../styles/app.css'
import Navbar from './Navbar.js';
import { Routes, Route } from 'react-router-dom';
import Properties from './Properties';
import AddProperty from './AddProperty';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Properties />} />
        <Route path='/add-property' element={<AddProperty />} />
      </Routes>
    </div>
  );
}

export default App;
