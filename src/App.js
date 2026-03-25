import './App.css'
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
function App() {
  return (
  <BrowserRouter>
      <Header />
    <div className='App'>
      <Routes>
    <Route path='/' Component={Home} exact />
    <Route path='/cart' Component={Cart} />
   </Routes>
   </div>
   
</BrowserRouter>

    
  );
}

export default App;
