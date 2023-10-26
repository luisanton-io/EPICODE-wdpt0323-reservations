import { Container, Row } from "react-bootstrap";
import "./App.css";
import ReservationForm from "./ReservationForm";
import ReservationList from "./ReservationList";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  console.table({ counter });
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <Container className="py-5">
        <h1>Reservations</h1>
        <Row>
          <ReservationForm />
          <ReservationList />
        </Row>
      </Container>
    </div>
  );
}

export default App;
