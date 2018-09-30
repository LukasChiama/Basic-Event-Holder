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
  //listButton2.setAttribute('id', counter)
  const buttonText1 = document.createTextNode('Edit Event')
  const buttonText2 = document.createTextNode('Delete Event')

    listMum.setAttribute('class', 'event-hold')
    listMum.setAttribute('id', counter)
    listButton1.appendChild(buttonText1)
    listButton2.appendChild(buttonText2)
    listMum.classList.add('btn-group')
    listArr.appendChild(listMum)
    listButton1.onclick = editArr;
    listButton2.onclick = deleteArr;
    

    localStorage.setItem(counter, JSON.stringify(event));
    const eventSafe = JSON.parse(localStorage.getItem(counter))
 
    function renderEvent() {
      eventSafe.forEach(function (key) {
        const li = document.createElement('li')
        li.setAttribute('class', 'list-item')
        li.innerHTML = `${key}`
        listMum.appendChild(li)
      });
        listMum.appendChild(listButton1)
        listMum.appendChild(listButton2)
    }

    renderEvent(eventSafe);

  function deleteArr() {
      let x = document.activeElement.parentNode.id;
      let y = document.getElementById(x);
      localStorage.removeItem(x);
      listArr.removeChild(y);
      let itemsArr = [];
      for(let i = 0; i < (counter + 3); i++) {
        if (localStorage.getItem(i)) {
          item = JSON.parse(localStorage.getItem(i));
          itemsArr.push(item);
          
          // renderEvent(itemsArr);
          //console.log(i);
          }
        }
        /*while(listArr.hasChildNodes()) {
          listArr.removeChild(listArr.lastChild)
        }*/
      //return renderEvent();
      console.log(itemsArr);
    }
  function editArr() {
      //listArr.removeChild(listArr.lastChild)
      
      currentEvent.set('edit', eventSafe);
      console.log(localStorage.key(counter));
  }

}
