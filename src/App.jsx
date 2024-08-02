import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RouteList from './routes/RouteList';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <RouteList />
      </BrowserRouter>
    </div>
  )
}

export default App
