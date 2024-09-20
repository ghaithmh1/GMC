// BasicCard.js
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from './Image';
import Name from './Name';
import Description from './Description';
import Price from './Price';
import Hello from './Hello';

function BasicCard(props) {
    return (
        <Card border="secondary" style={props.secondarystyle}>
            <Card.Img variant="top" src={Image()} />
            <Card.Body>
                <Card.Title style={props.titleStyle}>{Name()}</Card.Title>
                <Card.Text style={props.textStyle}>{Description()}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item style={props.listStyle}>{Price()}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#" style={props.linkStyle}>Previous Product</Card.Link>
                <Card.Link href="#" style={props.linkStyle}>Next Product</Card.Link>
                
                <Hello textStyle={props.textStyle} />
            </Card.Body>
        </Card>
    );
}

export default BasicCard;
