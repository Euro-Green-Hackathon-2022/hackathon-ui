import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function PersonForm() {
    const [name, setName] = useState('');
    const [relation, setRelation] = useState('');
    const [age, setAge] = useState('');
    const [maxPrice, setMaxPrice] = useState(10);
    const [keywords, setKeywords] = useState('');

    const handleSubmit= (e) => {
        e.preventDefault();

        // save fields

        // wipe the form

        // send http request for suggestions

        // create card with suggestions and search results


        const request = `Suggest Christmas gifts for a ${relation} aged ${age}, who likes ${keywords}, under ${maxPrice} euro as single words`;

        console.log("Request: %O", request);
    }

    return (
        <Form onSubmit={e => { handleSubmit(e) }}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicRelation">
                <Form.Label>Relation</Form.Label>
                <Form.Control
                    value={relation}
                    onChange={e => setRelation(e.target.value)}
                    placeholder="Relation"
                    type="text"
                    name="relation"
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
                    value={age}
                    onChange={e => setAge(e.target.value)}
                    placeholder="Age"
                    type="text"
                    name="age"
                    required
                />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicMaxPrice">
                <Form.Label>Max Price</Form.Label>
                <Form.Control
                    value={maxPrice}
                    onChange={e => setMaxPrice(e.target.value)}
                    placeholder="20"
                    type="text"
                    name="maxPrice"
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicKeywords">
                <Form.Label>Keywords</Form.Label>
                <Form.Control
                    value={keywords}
                    onChange={e => setKeywords(e.target.value)}
                    placeholder="CSV Keywords"
                    type="textarea"
                    name="keywords"
                    required
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}
export default PersonForm;
