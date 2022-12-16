import './App.css';
import PersonForm from "./Components/PersonForm";
import List from "./Components/List";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import axios from "axios";
import {Card, Col, Container, Row} from "react-bootstrap";
import ListItem from "./Components/ListItem";
import Snowfall from "react-snowfall";
import Form from "react-bootstrap/Form";

function App() {
    const [people, updatePeople] = useState([]);
    const [lastPerson, setLastPerson] = useState({});
    const [budget, setBudget] = useState(0);
    const [remainingBudget, setRemainingBudget] = useState(0);

    const updateBudget = (e) => {
        setBudget(e.target.value);
        let totalSpend = 0;

        for (let i = 0; i < people.length; i++) {
            totalSpend += people[i].maxPrice;
        }
        setRemainingBudget(budget - totalSpend);
    }

    const getResultsForPerson = (person) => {
        const url = `http://localhost:8080/suggestion?relation=${person.relation}&age=${person.age}&keywords=${person.keywords}&maxPrice=${person.maxPrice}`;

        axios.get(url).then(res => {
            person.suggestions = res.data;

            for (let i = 0; i < person.suggestions.length; i++) {
                person.suggestions[i].open = true;
            }

            setRemainingBudget(budget - person.maxPrice);
            setLastPerson(person);
            updatePeople([...people, person]);
            console.log(people);
        });
    };

    const addPerson = (person) => {
        person = getResultsForPerson(person);
    };


    // save fields

    // send http request for suggestions

    // create card with suggestions and search results


    return (
        <div className="App">
            <Snowfall/>
            <header className="App-header">
                Gift Givers
            </header>
            <Container>
                <Row class="budget">
                    <Col>
                        <span class="budget-label">Budget:</span>
                        <Form.Control
                            class="budget-input"
                            type="number"
                            placeholder="Budget"
                            value={budget}
                            onChange={e => updateBudget(e.target.value)}
                            min="0"
                            required
                        />
                        <div class="remaining-budget">
                            <span
                                className={remainingBudget < 0 ? "text-danger" : null}> Remaining: {remainingBudget}</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col s={6}>
                        <Card>
                            <Card.Body>
                                <PersonForm addPerson={addPerson}/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col s={6}>
                        {Object.keys(lastPerson).length != 0 ? <ListItem person={lastPerson}/> : null}
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col s={12}>
                        <List people={people}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
        ;
}

export default App;
