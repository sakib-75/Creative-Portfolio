import './Styles/App.css'
import Header from './Components/Header/Header'
import Services from './Components/Services/Services'
import HireUs from './Components/Hire Us/Hire_us'
import Completedwork from './Components/Completed Work/Completed_work'
import Projects from './Components/Projects/Projects'
import Pricing from './Components/Pricing/Pricing'
import Blog from './Components/Blog/Blog'
import {Footer} from './Components/Footer/Footer'
import Contact from './Components/Contact us/Contact'

function App() {
  return (
    <div>
      <Header />
      <Services />
      <HireUs />
      <Completedwork />
      <Projects />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
