import './App.css';
import Song from './components/song';
import Navbar from './components/navbar';
//import axios from 'axios';

function App() {

  return (
    <div>
      <Song />
      <div className='nav'>
        <Navbar />
      </div>

    </div>
  )
}


export default App;