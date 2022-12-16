import {Card, CardGroup, Collapse} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import {CaretDownFill, CaretUpFill} from "react-bootstrap-icons";



export default function SuggestionCard({suggestion}) {
    console.log("suggestion: %O", suggestion);
    const [open, setOpen] = useState(true);

    const toggleOpen = () => {
        setOpen(!open)
    }


    return <Card>
        <Card.Body>
            <Card.Title>{suggestion.keyword}</Card.Title>

            {open ? <CaretUpFill onClick={toggleOpen}/> : <CaretDownFill onClick={toggleOpen}/>}
            {/*{open ? <i className="bi bi-caret-down-fill"  ></i> : <i className="bi bi-caret-up-fill" onClick={toggleOpen}></i>}*/}
            <Collapse in={open}>
                <CardGroup>
                    {
                        suggestion.items.slice(0, 3).map((item, resultIndex) =>
                            <Card key={resultIndex}>
                                <Card.Body>
                                    <Card.Img variant="top" src={item.image}/>
                                    <Card.Title>{item.title}</Card.Title>
                                    <a href={item.link} class="btn btn-success pull-left" target="_blank">Link</a>

                                </Card.Body>
                            </Card>
                        )
                    }
                </CardGroup>
            </Collapse>
        </Card.Body>
    </Card>;
}

