let counter = -1;

function storeEvent() {

  counter += 1;
 
  const eventHolder = new Map();
  const currentEvent = new Map();
  
  const event = [];
  
  const nameOf = document.getElementById("name").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  const venue = document.getElementById("venue").value;
  const price = document.getElementById("price").value;
  const msg = document.getElementById("msg").value;

  
  currentEvent.set("Event Name", nameOf); 
  currentEvent.set("Venue", venue);
  currentEvent.set("Starts", startDate);
  currentEvent.set("Ends", endDate);
  currentEvent.set("Ticket Price", price);
  currentEvent.set("Description", msg);

  eventHolder.set("Events", currentEvent);

  event.push("Event Name: " + nameOf);
  event.push("Venue: " + startDate);
  event.push("Starts: " + endDate);
  event.push("Ends: " + venue);
  event.push("Ticket Price: " + price);
  event.push("Description: " + msg);
  
  const listArr = document.getElementById('event-list')
  const listMum = document.createElement('ul')
  const listButton1 = document.createElement('BUTTON')
  const listButton2 = document.createElement('BUTTON')
  const buttonText1 = document.createTextNode('Edit Event')
  const buttonText2 = document.createTextNode('Delete Event')

    listMum.setAttribute('class', 'event-hold')
    listMum.setAttribute('id', nameOf)
    listButton1.appendChild(buttonText1)
    listButton2.appendChild(buttonText2)
    listMum.classList.add('btn-group')
    listArr.appendChild(listMum)
    listButton1.onclick = editArr;
    listButton2.onclick = deleteArr;
    

    localStorage.setItem(nameOf, JSON.stringify(Array.from(currentEvent.entries())));
    const eventSafe = new Map(JSON.parse(localStorage.getItem(nameOf)));

    // localStorage.setItem(counter, JSON.stringify(event));
    // const eventSafe = JSON.parse(localStorage.getItem(counter));

    function renderEvent() {
      eventSafe.forEach(function (value, key) {
        //for (let [key, value] of eventSafe) {
        const li = document.createElement('li')
        li.setAttribute('class', 'list-item')
        li.innerHTML = `${key}: ${value}`
        listMum.appendChild(li)
      });
        listMum.appendChild(listButton1)
        listMum.appendChild(listButton2)
    }

    renderEvent(eventSafe);

    for (let i =0; i < 6; i++) {
      document.getElementsByClassName('val')[i].value= ''; 
    }

  function deleteArr() {
      let x = document.activeElement.parentNode.id;
      let y = document.getElementById(x);
      localStorage.removeItem(x);
      listArr.removeChild(y);
      // for (let i =0; i < 6; i++) {
      //   document.getElementsByClassName('val')[i].value= ''; 
      // }
    }
  function editArr() {
      let a = document.activeElement.parentNode.id;
      let b = document.getElementById(a);
      let c = JSON.parse(localStorage.getItem(a));
      console.log(c);
      //listArr.removeChild(b);

      // for (let i = 0; i < 6; i++) {
      //   document.getElementsByClassName('val')[i].value = c[i];
      // }
      listArr.removeChild(b);
      for (let i = 0; i < 6; i++) {
      // i = 0;
      // c.forEach(function () {
        document.getElementsByClassName('val')[i].value = c[i][1];
      };
  }

}
