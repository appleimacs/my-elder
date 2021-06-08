import React from 'react';
import Card from 'react-bootstrap/Card';

const Cards = (props) => {
    return (
        <Card id="card">
            <Card.Img src={props.card.imageUrl} />
            <Card.Body>
                <Card.Title>{props.card.name} / {props.card.type} / {props.card?.set?.name}</Card.Title>
                <Card.Text>{props.card.text}</Card.Text>
            </Card.Body>
        </Card>
    )
}
export default Cards