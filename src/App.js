import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  return (
    <div className="App">

      <Navbar title="React project" link="products" />
      <TextForm heading="Let us code" />

    </div>

  );
}

export default App;
