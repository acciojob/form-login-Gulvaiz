function getFormvalue(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get the form elements by their names
    const form = document.getElementById('form1');
    const fname = form.elements['fname'].value;
    const lname = form.elements['lname'].value;

    // Display the alert with the concatenated first and last name
    alert(`${fname} ${lname}`);
}

// Attach the event listener to the form's submit event
document.getElementById('form1').addEventListener('submit', getFormvalue);
