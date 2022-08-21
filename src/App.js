import Navbar from './components/Navbar'
import './App.css';
import Content from './components/Content';
import {AddToCartProvider} from './context/AddToCartContext'

function App() {
  return (
    <AddToCartProvider>
      <div className="App mb-10">
        <Navbar/>
        <Content/>
      </div>
    </AddToCartProvider>
  );
}

export default App;
