// script.js
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;
    const instructions = document.getElementById("instructions").value;

    const message = `Reservation Details:
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Date: ${date}
    Time: ${time}
    Number of Guests: ${guests}
    Special Instructions: ${instructions}`;

    const whatsappNumber = "+916377963587"; // e.g., 15551234567 for +1 555-123-4567
    const encodedMessage = encodeURIComponent(message);

    let whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    if (window.innerWidth >= 768) {
      // Assuming desktop screen width is 768px or greater
      whatsappLink = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
    }

    window.open(whatsappLink, "_blank");
  });
