import logo from './logo.svg';
import './App.css';
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <div class="landing">
        <Landing />
      </div> 
      <Projects />
      <Footer />
    </div>

  );
}

export default App;
