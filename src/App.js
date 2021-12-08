import './Styles/App.css'
import Header from './Components/Header/Header'
import Services from './Components/Services/Services'
import HireUs from './Components/Hire Us/Hire_us'
import Completedwork from './Components/Completed Work/Completed_work'
import Projects from './Components/Projects/Projects'

function App() {
  return (
    <div>
      <Header />
      <Services />
      <HireUs />
      <Completedwork />
      <Projects />

    </div>
  );
}

export default App;
