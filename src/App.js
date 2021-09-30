import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    }
    else {
      setMode('light');
    }
  }
  return (
    <div className="App">
      <Navbar title="React project" link="products" mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Let us code" mode={mode} />
    </div>
  );
}

export default App;
