function showUpcoming() {
  if (localStorage.length == 0){
    window.alert("You have no Upcoming Events!")
  }
  for (let i = 0; i < localStorage.length; i++) {
    items = new Map(JSON.parse(localStorage.getItem(localStorage.key(i))))
    renderEvent(items);
    
}
  
}

function resetEvent() {
  for (let i =0; i < 6; i++) {
    document.getElementsByClassName('val')[i].value= ''; 
  }
}

function checkName() {

const nameOf = document.getElementById("name").value;
const startDate = document.getElementById("startDate").value;
const endDate = document.getElementById("endDate").value;
const venue = document.getElementById("venue").value;
const price = document.getElementById("price").value;
const msg = document.getElementById("msg").value;

  if (nameOf === '') {
    return alert('Event Name is required. Please input!');
  } else {
    return storeEvent();
  }
   
  function storeEvent() {

    const eventHolder = new Map();
  
    eventHolder.set("Event Name", nameOf); 
    eventHolder.set("Venue", venue);
    eventHolder.set("Starts", startDate);
    eventHolder.set("Ends", endDate);
    eventHolder.set("Ticket Price", price);
    eventHolder.set("Description", msg);
  
    localStorage.setItem(nameOf, JSON.stringify(Array.from(eventHolder.entries())));
    const eventSafe = new Map(JSON.parse(localStorage.getItem(nameOf)));
    return  renderEvent(eventSafe);
  }
}

function renderEvent(arr) {

  const nameOf = document.getElementById("name").value;
  
  const listArr = document.getElementById('output')
  const listMum = document.createElement('ul')
  const listButton1 = document.createElement('BUTTON')
  const listButton2 = document.createElement('BUTTON')
  const buttonText1 = document.createTextNode('Edit Event')
  const buttonText2 = document.createTextNode('Delete Event')

    listMum.setAttribute('class', 'event-hold')
    listMum.setAttribute('id', arr.get("Event Name"))
    listButton1.appendChild(buttonText1)
    listButton2.appendChild(buttonText2)
    listMum.classList.add('btn-group')
    listArr.appendChild(listMum)
    listButton1.onclick = editArr;
    listButton2.onclick = deleteArr;

        
    for (let [key, value] of arr) {
        const li = document.createElement('li')
        li.setAttribute('class', 'list-item')
        li.innerHTML = `${key}: ${value}`
        listMum.appendChild(li)
      };
      listMum.appendChild(listButton1)
      listMum.appendChild(listButton2)
    
  

    for (let i =0; i < 6; i++) {
      document.getElementsByClassName('val')[i].value= ''; 
    }

  function deleteArr() {
      let x = document.activeElement.parentNode.id;
      let y = document.getElementById(x);
      localStorage.removeItem(x);
      listArr.removeChild(y);
    }
  function editArr() {
      let a = document.activeElement.parentNode.id;
      let b = document.getElementById(a);
      let c = JSON.parse(localStorage.getItem(a));
      listArr.removeChild(b);

      i = 0;
      c.forEach(function () {
        document.getElementsByClassName('val')[i].value = c[i][1];
        i++
      });
  }
}

function clearStorage() {
  localStorage.clear();
  const listArr2 = document.getElementById('output')
  while (listArr2.hasChildNodes) {
    listArr2.removeChild(listArr2.lastChild)
  }
}