function registerEvents() {
  registerReservationEvent();
}

function registerReservationEvent() {
  let btn = document.getElementById("reserva-btn");

  btn.addEventListener("click", function() {
    console.log("event:: btn click");
    let orderId = prompt("Enter order id: ");
    let lastname = prompt("Enter last name: ");

    checkReservation(orderId, lastname);
  })
}
