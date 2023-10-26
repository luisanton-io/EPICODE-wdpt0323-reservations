import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

// Esempio payload:
// "_id": "653a658ff6e3dd001495e456",
// "name": "riccardo",
// "phone": "4343424",
// "numberOfPeople": 2,
// "smoking": true,
// "dateTime": "2023-10-31T20:30:00.000Z",
// "specialRequests": "nada",
// "createdAt": "2023-10-26T13:11:43.706Z",
// "updatedAt": "2023-10-26T13:11:43.706Z",
export default function ReservationList() {
  const [loading, setLoading] = useState(true);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Fetch // versione con Promise.then
    fetch("https://striveschool-api.herokuapp.com/api/reservation")
      .then((r) => r.json())
      .then(setReservations)
      .finally(() => {
        setLoading(false);
      });

    // Fetch // versione con async/await
    // (async () => {
    //   try {
    //     const response = await fetch(
    //       "https://striveschool-api.herokuapp.com/api/reservation"
    //     );
    //     const data = await response.json();
    //     setReservations(data);
    //   } finally {
    //     setLoading(false);
    //   }
    // })();

    // fetchData();
  }, []);

  const handleDelete = (id) => {
    fetch("https://striveschool-api.herokuapp.com/api/reservation/" + id, {
      method: "DELETE",
    })
      .then(() => {
        alert("Reservation deleted!");
        return fetch("https://striveschool-api.herokuapp.com/api/reservation");
      })
      .then((r) => r.json())
      .then(setReservations)
      .catch(console.error);
  };

  return loading ? (
    <Spinner />
  ) : (
    reservations.map((reservation) => (
      <div className="d-flex align-items-center gap-4" key={reservation._id}>
        <div>
          <h3>{reservation.name}</h3>
          <h4>{reservation.phone}</h4>
          <h4>{reservation.dateTime}</h4>
          <p>{reservation.specialRequests}</p>
        </div>
        <Button
          variant="outline-danger"
          onClick={() => {
            handleDelete(reservation._id);
          }}
        >
          <Trash />
        </Button>
      </div>
    ))
  );
}
