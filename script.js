// Function to handle form submission
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;

    // Simple validation (you can expand this as needed)
    if (!name || !email || !checkin || !checkout) {
        alert('Please fill in all fields.');
        return;
    }

    // Alert the user with their booking details
    alert(`Booking Details:\nName: ${name}\nEmail: ${email}\nCheck-in: ${checkin}\nCheck-out: ${checkout}`);
});