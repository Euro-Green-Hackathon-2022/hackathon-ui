import {Card, Row} from "react-bootstrap";
import SuggestionCard from "./SuggestionCard";


export default function ListItem({person}) {

    return <Card className="border-dark person-card text-white bg-success">
        <Card.Body>
            <Card.Title>{person.name}</Card.Title>
            {
                person.suggestions.slice(0, 3).map((suggestion, suggestionIndex) =>
                    <Row className="mt-2 mb-2" key={suggestionIndex}>
                        <SuggestionCard suggestion={suggestion}></SuggestionCard>
                    </Row>
                )
            }
        </Card.Body>
    </Card>
}