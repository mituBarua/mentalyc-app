import './App.css';
import Navigation from './Component/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import UploadContent from './Component/UploadContent';

function App() {
  return (
    <div className="App">
     <Navigation/>
     <UploadContent/>
    </div>
  );
}

export default App;
