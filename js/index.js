const ticketButtons = document.querySelectorAll(".ticket");
const totalPriceDisplay = document.getElementById("totalPrice");
const totalTicketsDisplay = document
  .getElementById("selectedItem")
  .querySelector("span");
  const grandTotalDisplay = document.getElementById("grandTotal");
const couponCodeInput = document.getElementById("coupon-code");
const applyButton = document.getElementById("apply-button");

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
  const tbody = document.querySelector("#ticketTable tbody ");
  const thead = document.getElementById("selectedItem");
  tbody.innerHTML = "";
  thead.innerText = selectedTickets.length;

  const nextButton = document.getElementById("nextButton");
  nextButton.disabled = selectedTickets.length < 1;

 
  selectedTickets.forEach((ticket) => {
    const tr = document.createElement("tr");
    const tdTicket = document.createElement("td");
    tdTicket.textContent = ticket;
    tr.appendChild(tdTicket);

    const tdType = document.createElement("td");
    tdType.textContent = "Economy";
    tr.appendChild(tdType);

    const tdPrice = document.createElement("td");
    tdPrice.textContent = "550";
    tr.appendChild(tdPrice);

    tbody.appendChild(tr);
  });

   const totalAmount = selectedTickets.length * 550; 
  totalPriceDisplay.textContent = "BDT " + totalAmount.toFixed(2);

// apply button calculation starts from here

applyButton.disabled = selectedTickets.length < 4;

applyButton.addEventListener("click", function () {
  if (!applyButton.disabled && couponCodeInput.value === "NEW15") {
    const discount = 0.15;
    let totalAmount=selectedTickets.length * 550;
    console.log(totalAmount)
    let discountedTotal = totalAmount * discount;
    console.log('discountedTotal', discountedTotal);
    let total = totalAmount - discountedTotal;
    console.log('total',total)
    grandTotalDisplay.textContent = "BDT " + total.toFixed(2);
    couponCodeInput.value = ""; 
}
    else if(!applyButton.disabled && couponCodeInput.value === "Couple 20"){
      const discount = 0.20;
      let totalAmount=selectedTickets.length * 550;
      console.log(totalAmount)
      let discountedTotal = totalAmount * discount;
      console.log('discountedTotal', discountedTotal);
      let total = totalAmount - discountedTotal;
      console.log('total',total)
      grandTotalDisplay.textContent = "BDT " + total.toFixed(2);
      couponCodeInput.value = "";  
    }
  
});

grandTotalDisplay.textContent = "BDT " + totalAmount.toFixed(2);
}
function Continue() {

    window.Location.href = "http://127.0.0.1:5500/index.html";

    window.location.reload()

}