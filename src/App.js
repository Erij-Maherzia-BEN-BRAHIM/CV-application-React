import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import AddCandidatForm from "./components/AddCandidatForm";
import Infos from "./components/Infos";
import Cv from './components/Cv';
import Update from './components/Update';
import Register from "./components/Register";

function App() {
  let {id} = useParams();
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Cv></Cv>}>
        </Route>
          <Route exact path="/cv/:_id" element={<Infos></Infos>} />
          <Route exact path="/cv/:_id/edit" element={<Update></Update>} /> 
        <Route
          path="/addNew"
          element={<AddCandidatForm></AddCandidatForm>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </>
  );
}

export default App;
