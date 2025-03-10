// task 2 Adding Support Tickets Dynamically
function addTicket(customerName, issueDescription, priorityLevel) {
    const ticketContainer = document.getElementById('ticketContainer');

    const ticket = document.createElement('div');
    ticket.setAttribute('class', 'ticket'); // creating a div for tickets

    const nameHeading = document.createElement('h2');
    nameHeading.textContent = customerName; // section for customer's name

    const issueText= document.createElement('p');
    issueText.textContent = issueDescription; // section for issues

    const priorityState = document.createElement('span');
    priorityState.textContent = `Priority: ${priorityLevel}`;
    priorityState.setAttribute('class', priorityLevel.toLowerCase()); // section for priority level

    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.setAttribute('class', 'resolve-button'); // making a button to resolve ticket issue

    // task 4  Implementing Ticket Resolution with Event Bubbling
    resolveButton.addEventListener('click', function(event) {
        ticketContainer.removeChild(ticket); // remove ticket from container
        event.stopPropagation();
    })

    ticket.appendChild(nameHeading); // section for appending elements to ticket
    ticket.appendChild(issueText);
    ticket.appendChild(priorityState);
    ticket.appendChild(resolveButton);
    ticketContainer.appendChild(ticket); // appending ticket to container

     // task 5 Additional Challenge – Inline Editing of Support Tickets
     ticket.addEventListener('dblclick', function() {
        const nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');
        nameInput.value = nameHeading.textContent;

        const issueInput = document.createElement('input');
        issueInput.setAttribute('type', 'text');
        issueInput.value = issueText.textContent;

        const priorityInput = document.createElement('input');
        priorityInput.setAttribute('type', 'text');
        priorityInput.value = priorityState.textContent.split(": ")[1]; // adding current priority

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save'; // creating save button

        ticket.innerHTML = ''; // clearing current content

        ticket.appendChild(nameInput);
        ticket.appendChild(issueInput);
        ticket.appendChild(priorityInput);
        ticket.appendChild(saveButton); // adding appending 

        saveButton.addEventListener('click', function() { // save button listener

            nameHeading.textContent = nameInput.value;
            issueText.textContent = issueInput.value;
            priorityState.textContent = `Priority: ${priorityInput.value}`;
            priorityState.setAttribute('class', priorityInput.value.toLowerCase()); // updating new inputs

            ticket.innerHTML = '';
            ticket.appendChild(nameHeading);
            ticket.appendChild(issueText);
            ticket.appendChild(priorityState);
            ticket.appendChild(resolveButton);
        }); // moving back fields to static text
    });
}
