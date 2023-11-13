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
      <Profil />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
