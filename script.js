function showDialog() { 
  document.getElementsByClassName("openform")[0].style.display = "block";
}



function storeEvent() {
 
  document.getElementsByClassName("openform")[0].style.display = "none";

  const eventHolder = new Map();
  const currentEvent = new Map();
  
  let nameOf = document.getElementById("name").value;
  let startDate = document.getElementById("startDate").value;
  let endDate = document.getElementById("endDate").value;
  let venue = document.getElementById("venue").value;
  let price = document.getElementById("price").value;
  let msg = document.getElementById("msg").value;
  
  currentEvent.set("Event Name", nameOf); 
  currentEvent.set("Venue", venue);
  currentEvent.set("Starts", startDate);
  currentEvent.set("Ends", endDate);
  currentEvent.set("Ticket Price", price);
  currentEvent.set("Description", msg);

  
  const listArr = document.getElementById('event-list')
  const listMum = document.createElement('ul')
  const listButton1 = document.createElement('BUTTON')
  const listButton2 = document.createElement('BUTTON')
  const buttonText1 = document.createTextNode('Edit Event')
  const buttonText2 = document.createTextNode('Delete Event')

    listArr.appendChild(listMum)
    listButton1.appendChild(buttonText1)
    listButton2.appendChild(buttonText2)
    listMum.appendChild(listButton1)
    listMum.appendChild(listButton2)
    listArr.classList.add('btn-group')
    listButton1.onclick = editArr;
    listButton2.onclick = deleteArr;
  
  currentEvent.forEach( function (value, key) {
    const li = document.createElement('li')
    li.setAttribute('class', 'list-item')
    li.innerHTML = `${key}: ${value}`
    listMum.appendChild(li)
  });

  function deleteArr() {
    if (listArr.hasChildNodes()) {
      listArr.removeChild(listArr.childNodes[0])
    }
  }
  function editArr() {
   if (listArr.hasChildNodes()) {
      listArr.removeChild(listArr.lastChild)
    }
   return showDialog();
  }

}
