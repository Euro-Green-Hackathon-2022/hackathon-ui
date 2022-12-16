import './App.css';
import PersonForm from "./Components/PersonForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";

function App() {
    const [people, updatePeople] = useState([]);

    const addPerson = (person) => {
        updatePersons([...people, person]);
    };
    console.log(people)

    return (
        <div className="App">
            <header className="App-header">
                Gift Givers
            </header>
            <PersonForm addPerson={addPerson}/>

        </div>
    );
}

export default App;
