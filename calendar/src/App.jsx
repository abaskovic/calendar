import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'; 
import Calendar from "./pages/calendar/Calendar";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={< Calendar />}></Route> 
        <Route path='/:date' element={< Calendar />}></Route> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
