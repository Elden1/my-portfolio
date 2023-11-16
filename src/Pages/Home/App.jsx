import './assets/App.scss';
import Header from '../../Containers/Header';
import Footer from '../../Containers/Footer';
import Arrival from '../../Containers/Arrival';
import Profil from '../../Containers/Profile';
import Projects from '../../Containers/Projects';
import Skills from '../../Containers/Skills';
import Contact from '../../Containers/Contact';

let App = () => {

  return (
    <div className="App">
      <Header />
      <Arrival />
      <span className="anchor" id="anchor1"></span>
      <Profil />
      <Projects />
      <span className="anchor" id="anchor2"></span>
      <Skills />
      <span className="anchor" id="anchor3"></span>
      <Contact />
      <span className="anchor" id="anchor4"></span>
      <Footer />
    </div>
  );
}

export default App;
