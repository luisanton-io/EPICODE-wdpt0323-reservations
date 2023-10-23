import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function ReservationForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [numPeople, setNumPeople] = useState(2);
  const [smoking, setSmoking] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      phone: phoneNumber,
      numPeople,
      smoking,
      dateTime: `${date}T${time}`,
    };

    console.log(formData);

    fetch("https://striveschool-api.herokuapp.com/api/reservation", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then(function (response) {
        if (response.ok) {
          alert("Saved!");
        } else {
          alert("Something went wrong!");
        }
      })
      .catch((e) => console.error(e));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => {
            // e.target.value
            setName(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="+1-555-1234"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label># People</Form.Label>
        <Form.Control
          type="number"
          min={2}
          placeholder={2}
          value={numPeople}
          onChange={(e) => {
            setNumPeople(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="d-flex gap-2">
        <Form.Label>Smoking</Form.Label>
        <Form.Check
          value={smoking}
          onChange={(e) => {
            setSmoking(e.target.checked);
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Time</Form.Label>
        <InputGroup>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <Form.Control
            type="time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </InputGroup>
      </Form.Group>
      <Form.Group className="d-flex justify-content-end py-4 gap-2">
        <Button type="submit">Submit</Button>
      </Form.Group>
    </Form>
  );
}
