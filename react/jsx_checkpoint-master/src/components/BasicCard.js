import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from './Image';
import Name from './Name';
import Description from './Description';
import Price from './Price';


function BasicCard() {
    return (
        <Card border="secondary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Image()} />
            <Card.Body>
                <Card.Title style={{ fontFamily: "fantasy", fontSize: 20, fontStyle: "oblique" }}>{Name()}</Card.Title>
                <Card.Text style={{ fontFamily: "cursive", fontSize: 17 }}>{Description()}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item style={{ textAlign: "center", fontFamily: "fantasy", fontSize: 20 }}>{Price()}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#" style={{ fontFamily: "cursive", fontSize: 15 }}>Previous Product</Card.Link>
                <Card.Link href="#" style={{ fontFamily: "cursive", fontSize: 15 }}>Next Product</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default BasicCard;