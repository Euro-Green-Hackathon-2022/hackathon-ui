import {Card, CardGroup, Collapse, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import SuggestionCard from "./SuggestionCard";
import ListItem from "./ListItem";

export default function List(props) {

    const people = props.people;

    console.log("people: %O", people);

    const peopleCards = people.map((person, index) =>
        <ListItem className="m-5" person={person} key={index}></ListItem>
    );


    return (
        <div>
            {peopleCards}
        </div>
    );
}