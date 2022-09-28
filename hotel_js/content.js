async function updateContent() {
  const url = CONTENT_URL;

  let request = await fetch(url).then((response) => {
    response.json().then((jsonResult) => {
      setText("header", jsonResult["header"]["title"]);
      setText("footer", jsonResult["footer"]["text"]);
      setText("header-description", jsonResult["header"]["description"]);
      setText("historyTitle", jsonResult["history"]["title"]);
      setText("history-description", jsonResult["history"]["description"]);
      setText("locationTitle", jsonResult["location"]["title"]);
      setText("location-description", jsonResult["location"]["description"]);
      setText("mealsTitle", jsonResult["meals"]["title"]);
      setText("meals-description", jsonResult["meals"]["description"]);
      setText("fitnessTitle", jsonResult["fitness"]["title"]);
      setText("fitness-description", jsonResult["fitness"]["description"]);
    });
  })
}

function adaptContent() {
  let saludo = document.getElementById("saludo");
  let dia = new Date()
  let hora = dia.getHours()

  if (hora > 6 && hora < 12) {
    saludo.innerHTML = "<h3>Buenos días</h3>"
    saludo.style.background = "#9ab755"
  } else if (hora > 12 && hora < 21) {
    saludo.innerHTML = "<h3>Buenas tardes</h3>"
    saludo.style.background = "#7e3333"
  } else {
    saludo.innerHTML = "<h3>Buenas noches</h3>"
    saludo.style.background = "#333"
  }
}

function setText(id, text) {
  document.getElementById(id).innerText = text;
}
