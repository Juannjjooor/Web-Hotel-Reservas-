async function checkReservation(orderId, lastname) {
  const url = RESERVATION_URL
  let body = JSON.stringify({ 
    orderId: orderId, 
    lastname: lastname 
  });
  let headers = {
    "Content-Type": "application/json"
  };
  let config = { 
    method: "POST", 
    headers: headers, 
    body: body 
  };
  let request = await fetch(url, config).then((response) => {
    if (response.status !== 200) {
      alert("Datos incorrectos, inténtalo de nuevo más tarde");
      return;
    }

    response.json().then((jsonResult) => {
      let isPaid = jsonResult["reservations"]["paid"];

      if (isPaid) {
        console.log("reservation:: paid");
      } else {
        console.log("reservation:: not paid");
        let nights = jsonResult["reservations"]["nights"];
        
        askUserToPay(nights);
      }
    });
  })
}

function askUserToPay(nights) {
  const prices = nights.map(night => night.price);
  const total = prices.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  alert(`La reserva aún no ha sido abonada, tendrá que abonar ${total} € en su entrada al hotel`);
}
