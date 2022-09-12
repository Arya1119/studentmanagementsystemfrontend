
import './App.css';
import  Navigationbar from './components/Navigationbar';
import Student from './components/Student';
import StudentList from './components/StudentList';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      < Navigationbar/>
      <Routes>
        <Route path="/" element={ <Student/>} />
        <Route path="/studentlist" element={ <StudentList/>} />
      </Routes>
     
     
    </div>
  );
}

export default App;
