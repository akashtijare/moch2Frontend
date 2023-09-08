import logo from './logo.svg';
import './App.css';
import { Allroutes } from './AllRoutes/Allroutes';
import { Navbar } from './AllRoutes/Navbar';

function App() {
  return (
    <div className="App">
        
        <Navbar/>
        <Allroutes/>
    </div>
  );
}

export default App;
