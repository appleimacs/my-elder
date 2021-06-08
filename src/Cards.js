import React, { useState ,useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Cards = (props) => {
    const [cards, setCards] = useState([]);

    useEffect(()=>{
        setCards(props.cards)
    }, [props])

    return (
        <Row>{cards &&
        cards.map((card, index)=>
            <Col className="card-deck mt-4 ml-2" key={index} 
                sm={{span:6}} lg={{span:3}} md={{span:4}}>
                <Card>
                    <Card.Img src={card.imageUrl} />
                    <Card.Body>
                        <Card.Title>{card.name} / {card.type} / {card?.set?.name}</Card.Title>
                        <Card.Text>{card.text}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )}
        </Row>
    )
}
export default Cards