import BasicCard from './components/BasicCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import back from './watermelon.jpg';
import melon from './melon.png';
import Alert from 'react-bootstrap/Alert';

function App() {
  const firstName = 'Foulen';
  return (
    <>
      <div className="WaterMelonDiv" style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 20, backgroundImage: `URL(${back})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '653px' }}>
        <div>
          <BasicCard />
          <Alert className="Alert1" key='danger' variant='danger' style={{ textAlign: "center", fontFamily: "fantasy", fontSize: 20 }}>{firstName.length ? `Hello ${firstName}` : 'Hello There !'}</Alert>
        </div>
        {(firstName.length) ? <img src={melon} style={{ width: 100, height: 100 }} alt="melon"></img> : null}
      </div >
    </>
  );
}

export default App;
