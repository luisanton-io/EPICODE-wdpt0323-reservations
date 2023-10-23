import { Container, Row } from "react-bootstrap";
import "./App.css";
import ReservationForm from "./ReservationForm";
import ReservationList from "./ReservationList";

function App() {
  return (
    <div>
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
