import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import './App.css';

const App = () => {
  const firstName = 'ghaith'; 

  return (
    <Container className="container">
      <Card className="card" style={{ width: '18rem' }}>
        <Card.Body className="card-body">
          <Image />
          <Card.Title className="card-title"><Name /></Card.Title>
          <Card.Text className="card-text">
            <Price />
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="greeting">
        <h4>Hello, {firstName || 'there!'}</h4>
        {firstName && <img src="https://www.collegenews.com/wp-content/uploads/2019/05/Kanye-West-6.gif" alt="Greeting" />} 
      </div>
    </Container>
  );
};

export default App;
