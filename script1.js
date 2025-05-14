// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Add click listeners to all Dispatch buttons in the table
  document.querySelectorAll(".clay-button").forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Dispatch marked successfully!");
      // You can replace this with logic to update the order status or send data to a server
    });
  });

  // Handle form submission
  const dispatchForm = document.querySelector("form");
  dispatchForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values from form inputs
    const orderId = dispatchForm.querySelector("select").value;
    const transporter = dispatchForm.querySelector('input[placeholder*="Transporter"]').value;
    const vehicle = dispatchForm.querySelector('input[placeholder*="Vehicle"]').value;
    const contact = dispatchForm.querySelector('input[placeholder*="Driver"]').value;
    const date = dispatchForm.querySelector('input[type="date"]').value;
    const time = dispatchForm.querySelector('input[type="time"]').value;

    if (orderId === "Select Order ID") {
      alert("Please select an Order ID.");
      return;
    }

    // Simulate saving data (you could replace this with an API call)
    console.log("Dispatch Details Saved:", {
      orderId,
      transporter,
      vehicle,
      contact,
      date,
      time
    });

    alert(`Order ${orderId} dispatched successfully!`);
    dispatchForm.reset();
  });
});
