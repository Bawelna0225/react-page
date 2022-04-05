import './App.css';
import { Navbar } from './Components/Navbar/navbar';
import { Home } from './Components/Home/home'
import { About } from './Components/About/About'
import { Projects } from './Components/Projects/Projects';
import { Team } from './Components/Team/Team';
import { Contact } from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Team/>
      <Contact/>
    </div>
  );
}

export default App;
