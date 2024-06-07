function getFormvalue(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get the form elements by their names
    const form = document.getElementById('form1');
    const fname = form.elements['fname'].value;
    const lname = form.elements['lname'].value;
	const submit = form.querySelector(".submit")

	alert(`${fname} ${lname}`

}

document.getElementById('form1').addEventListener('submit', getFormvalue);


