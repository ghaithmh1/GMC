import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function Player({ name, team, nationality, jerseyNumber, age, image }) {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" style={{ width: '286px', height: '380px' }} src={image} />
            <Card.Body>
                <Card.Title style={{ fontSize: 25 }}>{name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item style={{ fontSize: 20 }}>{team}</ListGroup.Item>
                <ListGroup.Item>{nationality}</ListGroup.Item>
                <ListGroup.Item>{jerseyNumber}</ListGroup.Item>
                <ListGroup.Item>{age}</ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

Player.defaultProps = {
    name: "Xxxx Xxxxxxxxx",
    team: "Xxxxxxxx",
    nationality: "Xxxxxx",
    jerseyNumber: 0,
    age: 0,
    image: './Fedor.webp'
}

export default Player;