import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
function App() {
  return (
    <div className="App">
      <NavBar />
      <>
        <Routes>
          <Route index path='/'  element={<Main/>} />
          <Route path='/about'  element={<About/>} />
        </Routes>
      </>
      <Footer />
    </div>
  );
}

export default App;
