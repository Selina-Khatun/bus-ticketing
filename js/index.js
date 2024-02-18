const ticketButtons = document.querySelectorAll(".ticket");
const totalPriceDisplay = document.getElementById("totalPrice");
const totalTicketsDisplay = document.getElementById('selectedItem').querySelector('span');
let selectedTickets = [];
ticketButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("selected")) {
      button.classList.remove("selected");
      selectedTickets = selectedTickets.filter(
        (ticket) => ticket !== button.id,
      );
    } else {
      if (selectedTickets.length < 4) {
        button.classList.add("selected");
        selectedTickets.push(button.id);
      } else {
        alert("You can only select a maximum of 4 tickets.");
      }
    }
    updateTable();
  });
});
function updateTable() {
    const tbody = document.querySelector('#ticketTable tbody ');
    const thead=document.getElementById('selectedItem')
    tbody.innerHTML = '';
    thead.innerText=selectedTickets.length;
    selectedTickets.forEach(ticket => {
        const tr = document.createElement('tr');
        const tdTicket = document.createElement('td');
        tdTicket.textContent = ticket;
        tr.appendChild(tdTicket);

        const tdType = document.createElement('td');
        tdType.textContent = 'Economy'; 
        tr.appendChild(tdType);

        const tdPrice = document.createElement('td');
        tdPrice.textContent = '550'; 
        tr.appendChild(tdPrice);

        tbody.appendChild(tr);
    });

    totalPriceDisplay.textContent = 'BDT  ' + (selectedTickets.length * 550);
    
}
