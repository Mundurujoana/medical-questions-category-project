import './App.css';
import Forms from './Forms';
import Main from "./components/Main";
import Sidebar from './Sidebar';

function App() {

     const toggleSidebar = () => {
          setShowSidebar(!showSidebar);
        }
        
    return (
    <div className="App">
     <button onClick={toggleSidebar}>Toggle Sidebar</button>
     {/* <Main /> */}
     {/* <Forms /> */}
    </div>
  )
}

export default App;
